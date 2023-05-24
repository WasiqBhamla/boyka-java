/*
 * MIT License
 *
 * Copyright (c) 2023, Wasiq Bhamla
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

package com.github.wasiqb.boyka.actions.elements;

import static com.github.wasiqb.boyka.actions.CommonActions.getDriverAttribute;
import static com.github.wasiqb.boyka.actions.CommonActions.getElementAttribute;
import static com.github.wasiqb.boyka.actions.CommonActions.performMobileGestures;
import static com.github.wasiqb.boyka.enums.ListenerType.FINGER_ACTION;
import static com.github.wasiqb.boyka.enums.Message.ELEMENT_NOT_FOUND;
import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;
import static com.github.wasiqb.boyka.utils.ErrorHandler.throwError;
import static java.time.Duration.ZERO;
import static java.time.Duration.ofMillis;
import static java.util.Collections.singletonList;
import static java.util.Optional.ofNullable;
import static org.apache.logging.log4j.LogManager.getLogger;

import com.github.wasiqb.boyka.actions.interfaces.elements.IFingerActions;
import com.github.wasiqb.boyka.actions.interfaces.listeners.elements.IFingerActionsListener;
import com.github.wasiqb.boyka.builders.Locator;
import com.github.wasiqb.boyka.enums.SwipeDirection;
import org.apache.logging.log4j.Logger;

/**
 * Handles all single finger related actions
 *
 * @author Wasiq Bhamla
 * @since 16-Feb-2023
 */
public class FingerActions extends ElementActions implements IFingerActions {
    private static final Logger LOGGER = getLogger ();

    /**
     * Perform single finger actions on element
     *
     * @param locator Locator of the element
     *
     * @return Finger actions instance
     */
    public static IFingerActions withFinger (final Locator locator) {
        return new FingerActions (locator);
    }

    /**
     * Perform single finger actions on element
     *
     * @return Finger actions instance
     */
    public static IFingerActions withFinger () {
        return new FingerActions ();
    }

    private final IFingerActionsListener listener;

    FingerActions () {
        this (null);
    }

    FingerActions (final Locator locator) {
        super (locator);
        this.listener = getSession ().getListener (FINGER_ACTION);
    }

    @Override
    public void dragTo (final Locator destination) {
        LOGGER.traceEntry ();
        LOGGER.info ("Dragging [{}] to [{}] on Mobile devices.", this.locator.getName (), destination.getName ());
        ofNullable (this.listener).ifPresent (l -> l.onDragTo (this.locator, destination));
        final var dragSequence = getDriverAttribute (driver -> FingerGestureBuilder.init ()
            .sourceElement (this.locator)
            .pause (ofMillis (600))
            .build ()
            .dragTo (destination), null);
        performMobileGestures (singletonList (dragSequence));
        LOGGER.traceExit ();
    }

    @Override
    public void swipe (final SwipeDirection direction) {
        LOGGER.traceEntry ();
        LOGGER.info ("Swiping {} on Mobile devices.", direction);
        ofNullable (this.listener).ifPresent (l -> l.onSwipe (this.locator, direction));
        final var swipeUpSequence = getDriverAttribute (driver -> FingerGestureBuilder.init ()
            .direction (direction)
            .sourceElement (this.locator)
            .build ()
            .swipe (), null);
        performMobileGestures (singletonList (swipeUpSequence));
        LOGGER.traceExit ();
    }

    @Override
    public void swipeTill (final SwipeDirection direction) {
        LOGGER.traceEntry ();
        LOGGER.info ("Swiping till the element in the [{}] direction...", direction);
        ofNullable (this.listener).ifPresent (l -> l.onSwipeTill (this.locator, direction));
        final var maxSwipe = this.swipeSetting.getMaxSwipeUntilFound ();
        var swipeCounts = 0;
        final var element = onElement (this.locator);
        final var finger = withFinger ();
        while (!element.isDisplayed () && swipeCounts++ < maxSwipe) {
            finger.swipe (direction);
        }
        if (!element.isDisplayed ()) {
            throwError (ELEMENT_NOT_FOUND, this.locator.getName (), getSession ().getPlatformType ());
        }
        LOGGER.traceExit ();
    }

    @Override
    public void tap () {
        LOGGER.traceEntry ();
        LOGGER.info ("Tapping on the element...");
        ofNullable (this.listener).ifPresent (l -> l.onTap (this.locator));
        final var sequences = getElementAttribute (element -> FingerGestureBuilder.init ()
            .sourceElement (this.locator)
            .pause (ZERO)
            .build ()
            .tapOn (), this.locator, null);
        performMobileGestures (singletonList (sequences));
        LOGGER.traceExit ();
    }
}
