/*
 * MIT License
 *
 * Copyright (c) 2022 Wasiq Bhamla
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

package com.github.wasiqb.boyka.actions;

import static com.github.wasiqb.boyka.actions.CommonActions.getElementAttribute;
import static com.github.wasiqb.boyka.actions.CommonActions.performElementAction;
import static com.github.wasiqb.boyka.sessions.ParallelSession.getSession;
import static com.google.common.truth.Truth.assertThat;
import static org.apache.commons.lang3.StringUtils.EMPTY;
import static org.apache.logging.log4j.LogManager.getLogger;

import com.github.wasiqb.boyka.actions.interfaces.elements.IElementActions;
import com.github.wasiqb.boyka.builders.Locator;
import com.github.wasiqb.boyka.config.ui.mobile.device.SwipeSetting;
import com.google.common.truth.BooleanSubject;
import com.google.common.truth.StringSubject;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebElement;

/**
 * Perform element specific actions.
 *
 * @author Wasiq Bhamla
 * @since 09-Mar-2022
 */
public class ElementActions implements IElementActions {
    private static final Logger LOGGER = getLogger ();

    public static IElementActions onElement (final Locator locator) {
        return new ElementActions (locator);
    }

    protected final Locator      locator;
    protected final SwipeSetting swipeSetting;

    ElementActions (final Locator locator) {
        this.locator = locator;
        this.swipeSetting = getSession ().getMobileSetting ()
            .getDevice ()
            .getSwipe ();
    }

    @Override
    public String attributeOf (final String attribute) {
        LOGGER.traceEntry ();
        LOGGER.info ("Getting attribute: {} of element located by: {}", attribute, this.locator.getName ());
        LOGGER.traceExit ();
        return getElementAttribute (e -> e.getAttribute (attribute), this.locator, EMPTY);
    }

    @Override
    public void clear () {
        LOGGER.traceEntry ();
        LOGGER.info ("Clearing element located by: {}", this.locator.getName ());
        performElementAction (WebElement::clear, this.locator);
        LOGGER.traceExit ();
    }

    @Override
    public boolean isDisplayed () {
        LOGGER.traceEntry ();
        LOGGER.info ("Checking if element located by: {} is displayed", this.locator.getName ());
        return LOGGER.traceExit (getElementAttribute (WebElement::isDisplayed, this.locator, false));
    }

    @Override
    public boolean isEnabled () {
        LOGGER.traceEntry ();
        LOGGER.info ("Checking if element located by: {} is enabled", this.locator.getName ());
        return LOGGER.traceExit (getElementAttribute (WebElement::isEnabled, this.locator, false));
    }

    @Override
    public boolean isSelected () {
        LOGGER.traceEntry ();
        LOGGER.info ("Checking if element located by: {} is selected", this.locator.getName ());
        return LOGGER.traceExit (getElementAttribute (WebElement::isSelected, this.locator, false));
    }

    @Override
    public String styleOf (final String attribute) {
        LOGGER.traceEntry ();
        LOGGER.info ("Getting attribute: {} of element located by: {}", attribute, this.locator.getName ());
        LOGGER.traceExit ();
        return getElementAttribute (e -> e.getCssValue (attribute), this.locator, EMPTY);
    }

    @Override
    public String textOf () {
        LOGGER.traceEntry ();
        LOGGER.info ("Getting text of element located by: {}", this.locator.getName ());
        return LOGGER.traceExit (getElementAttribute (WebElement::getText, this.locator, EMPTY));
    }

    @Override
    public StringSubject verifyAttributeOf (final String attribute) {
        LOGGER.traceEntry ();
        LOGGER.info ("Verifying attribute of {}", this.locator.getName ());
        LOGGER.traceExit ();
        return assertThat (attributeOf (attribute));
    }

    @Override
    public BooleanSubject verifyElementDisplayed () {
        LOGGER.traceEntry ();
        LOGGER.info ("Verifying element {} is displayed", this.locator.getName ());
        LOGGER.traceExit ();
        return assertThat (isDisplayed ());
    }

    @Override
    public BooleanSubject verifyElementEnabled () {
        LOGGER.traceEntry ();
        LOGGER.info ("Verifying element {} is enabled", this.locator.getName ());
        LOGGER.traceExit ();
        return assertThat (isEnabled ());
    }

    @Override
    public BooleanSubject verifyElementSelected () {
        LOGGER.traceEntry ();
        LOGGER.info ("Verifying element {} is selected", this.locator.getName ());
        LOGGER.traceExit ();
        return assertThat (isSelected ());
    }

    @Override
    public StringSubject verifyStyleOf (final String attribute) {
        LOGGER.traceEntry ();
        LOGGER.info ("Verifying style of {}", this.locator.getName ());
        LOGGER.traceExit ();
        return assertThat (styleOf (attribute));
    }

    @Override
    public StringSubject verifyTextOf () {
        LOGGER.traceEntry ();
        LOGGER.info ("Verifying text of {}", this.locator.getName ());
        LOGGER.traceExit ();
        return assertThat (textOf ());
    }
}
