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

package com.github.wasiqb.boyka.actions.interfaces.elements;

import com.google.common.truth.BooleanSubject;
import com.google.common.truth.StringSubject;

/**
 * Element specific actions
 *
 * @author Wasiq Bhamla
 * @since 15-Feb-2023
 */
public interface IElementActions {
    /**
     * Gets the value of the attribute of the element.
     *
     * @param attribute attribute of the element
     *
     * @return value of the attribute of the element
     */
    String attributeOf (final String attribute);

    /**
     * Clear text, selection of element.
     */
    void clear ();

    /**
     * Gets the value if the element is displayed.
     *
     * @return true if the element is displayed, false otherwise
     */
    boolean isDisplayed ();

    /**
     * Gets the value if the element is enabled.
     *
     * @return true if the element is enabled, false otherwise
     */
    boolean isEnabled ();

    /**
     * Gets the value if the element is selected.
     *
     * @return true if the element is selected, false otherwise
     */
    boolean isSelected ();

    /**
     * Gets the styling attribute of the element.
     *
     * @param attribute attribute of the element
     *
     * @return value of the styling attribute of the element
     */
    String styleOf (final String attribute);

    /**
     * Gets the text of the element.
     *
     * @return text of the element
     */
    String textOf ();

    /**
     * Verify attribute of element.
     *
     * @param attribute attribute to verify
     *
     * @return {@link StringSubject} to verify the result
     */
    StringSubject verifyAttributeOf (final String attribute);

    /**
     * Verify if element is displayed.
     *
     * @return {@link BooleanSubject} to verify the result
     */
    BooleanSubject verifyElementDisplayed ();

    /**
     * Verify if element is enabled.
     *
     * @return {@link BooleanSubject} to verify the result
     */
    BooleanSubject verifyElementEnabled ();

    /**
     * Verify if element is selected.
     *
     * @return {@link BooleanSubject} to verify the result
     */
    BooleanSubject verifyElementSelected ();

    /**
     * Verify style of element.
     *
     * @param attribute attribute to verify
     *
     * @return {@link StringSubject} to verify the result
     */
    StringSubject verifyStyleOf (final String attribute);

    /**
     * Verify text of element.
     *
     * @return {@link StringSubject} to verify the result
     */
    StringSubject verifyTextOf ();
}
