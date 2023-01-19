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

package com.github.wasiqb.boyka.testng.ui.saucedemo.pages;

import static com.github.wasiqb.boyka.builders.Locator.buildLocator;
import static io.appium.java_client.AppiumBy.accessibilityId;
import static org.openqa.selenium.By.id;

import com.github.wasiqb.boyka.builders.Locator;
import lombok.Getter;

/**
 * Cart page.
 *
 * @author Wasiq Bhamla
 * @since 13-Mar-2022
 */
@Getter
public class CartPage {
    private static final CartPage CART_PAGE = new CartPage ();

    /**
     * Gets Cart page instance.
     *
     * @return Cart page instance
     */
    public static CartPage cartPage () {
        return CART_PAGE;
    }

    private final Locator checkout = buildLocator ().web (id ("checkout"))
        .android (accessibilityId ("test-CHECKOUT"))
        .ios (accessibilityId ("test-CHECKOUT"))
        .name ("Checkout")
        .build ();
    private final Locator delete   = buildLocator ().android (accessibilityId ("test-Delete"))
        .ios (accessibilityId ("test-Delete"))
        .name ("Delete")
        .build ();
    private final Locator remove   = buildLocator ().android (accessibilityId ("test-REMOVE"))
        .ios (accessibilityId ("test-REMOVE"))
        .name ("Remove")
        .build ();

    private CartPage () {
        // Avoid explicit class initialisation
    }
}
