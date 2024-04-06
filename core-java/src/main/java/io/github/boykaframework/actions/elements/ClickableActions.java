/*
 * MIT License
 *
 * Copyright (c) 2024, Wasiq Bhamla
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

package io.github.boykaframework.actions.elements;

import static io.github.boykaframework.actions.CommonActions.pause;
import static io.github.boykaframework.actions.CommonActions.performElementAction;
import static io.github.boykaframework.actions.elements.ElementFinder.find;
import static io.github.boykaframework.enums.ApplicationType.WEB;
import static io.github.boykaframework.enums.ListenerType.CLICKABLE_ACTION;
import static io.github.boykaframework.enums.PlatformType.IOS;
import static io.github.boykaframework.enums.WaitStrategy.CLICKABLE;
import static io.github.boykaframework.manager.ParallelSession.getSession;
import static io.github.boykaframework.utils.Validator.validateDelay;
import static java.util.Optional.ofNullable;
import static org.apache.logging.log4j.LogManager.getLogger;

import io.github.boykaframework.actions.interfaces.elements.IClickableActions;
import io.github.boykaframework.actions.interfaces.listeners.elements.IClickableActionsListener;
import io.github.boykaframework.builders.Locator;
import io.github.boykaframework.enums.PlatformType;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

/**
 * Handles all mouse related actions
 *
 * @author Wasiq Bhamla
 * @since 16-Feb-2023
 */
public class ClickableActions extends FingersActions implements IClickableActions {
    private static final Logger LOGGER = getLogger ();

    /**
     * Handles all mouse related actions.
     *
     * @param locator Locator of the elements.
     *
     * @return {@link IClickableActions} instance object
     */
    public static IClickableActions withMouse (final Locator locator) {
        return new ClickableActions (locator);
    }

    private final IClickableActionsListener listener;

    ClickableActions (final Locator locator) {
        super (locator);
        this.listener = getSession ().getListener (CLICKABLE_ACTION);
    }

    @Override
    public void click () {
        LOGGER.traceEntry ();
        LOGGER.info ("Clicking on element: {}", this.locator.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onClick (this.locator));
        final var session = getSession ();
        if (session.getPlatformType () == PlatformType.WEB || (session.getMobileSetting ()
            .getDevice ()
            .getApplication ()
            .getType () == WEB && session.getPlatformType () == IOS)) {
            pause (this.delaySetting.getBeforeClick ());
            scrollIntoView ();
            performElementAction (WebElement::click, this.locator);
        } else {
            tap ();
        }
        LOGGER.traceExit ();
    }

    @Override
    public void clickAndHold () {
        LOGGER.traceEntry ();
        LOGGER.info ("Click and hold on element: {}", this.locator.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onClickAndHold (this.locator));
        performElementAction ((driver, element) -> {
            final var actions = new Actions (driver);
            actions.pause (validateDelay (this.delaySetting.getBeforeClick ()))
                .clickAndHold (element)
                .perform ();
        }, this.locator);
        LOGGER.traceExit ();
    }

    @Override
    public void doubleClick () {
        LOGGER.traceEntry ();
        LOGGER.info ("Double Click on element: {}", this.locator.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onDoubleClick (this.locator));
        performElementAction ((driver, element) -> {
            final var actions = new Actions (driver);
            actions.pause (validateDelay (this.delaySetting.getBeforeClick ()))
                .doubleClick (element)
                .perform ();
        }, this.locator);
        LOGGER.traceExit ();
    }

    @Override
    public void dragTo (final Locator destination) {
        LOGGER.traceEntry ();
        LOGGER.info ("Drag and Drop on element: {} , {}", this.locator.getName (), destination.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onDragTo (this.locator, destination));
        performElementAction ((driver, element) -> {
            final var actions = new Actions (driver);
            actions.pause (validateDelay (this.delaySetting.getBeforeMouseMove ()))
                .dragAndDrop (element, find (destination, CLICKABLE))
                .perform ();
        }, this.locator);
        LOGGER.traceExit ();
    }

    @Override
    public void hover () {
        LOGGER.traceEntry ();
        LOGGER.info ("Hover on element: {}", this.locator.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onHover (this.locator));
        performElementAction ((driver, element) -> {
            final var actions = new Actions (driver);
            actions.pause (validateDelay (this.delaySetting.getBeforeMouseMove ()))
                .moveToElement (element)
                .perform ();
        }, this.locator);
        LOGGER.traceExit ();
    }

    @Override
    public void rightClick () {
        LOGGER.traceEntry ();
        LOGGER.info ("Right Click on element: {}", this.locator.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onRightClick (this.locator));
        performElementAction ((driver, element) -> {
            final var actions = new Actions (driver);
            actions.pause (validateDelay (this.delaySetting.getBeforeClick ()))
                .contextClick (element)
                .perform ();
        }, this.locator);
        LOGGER.traceExit ();
    }

    @Override
    public void submit () {
        LOGGER.traceEntry ();
        LOGGER.info ("Submitting element located by: {}", this.locator.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onSubmit (this.locator));
        performElementAction (WebElement::submit, this.locator);
        LOGGER.traceExit ();
    }
}
