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

package com.github.wasiqb.boyka.testng.web.theinternet;

import static com.github.wasiqb.boyka.actions.DriverActions.navigateTo;
import static com.github.wasiqb.boyka.actions.MouseActions.doubleClickOn;
import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyAcceptAlert;
import static com.github.wasiqb.boyka.manager.DriverManager.closeDriver;
import static com.github.wasiqb.boyka.manager.DriverManager.createDriver;
import static com.github.wasiqb.boyka.testng.web.theinternet.pages.DoubleClickPage.doubleClickPage;

import com.github.wasiqb.boyka.enums.ApplicationType;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

/**
 * Drag and drop test.
 *
 * @author Wasiq Bhamla
 * @since 26-Jul-2022
 */
public class DoubleClickTest {
    private static final String URL = "https://demo.guru99.com/test/simple_context_menu.html";

    /**
     * Setup test class by initialising driver.
     *
     * @param appType Application type
     * @param driverKey Driver config key
     */
    @BeforeClass (description = "Setup test class")
    @Parameters ({ "appType", "driverKey" })
    public void setupClass (final ApplicationType appType, final String driverKey) {
        createDriver (appType, driverKey);
        navigateTo (URL);
    }

    /**
     * Tear down test class by closing driver.
     */
    @AfterClass (description = "Tear down test class")
    public void tearDownClass () {
        closeDriver ();
    }

    /**
     * Double click test.
     */
    @Test (description = "Double click test")
    public void testDoubleClick () {
        doubleClickOn (doubleClickPage ().getButton ());
        verifyAcceptAlert ().isEqualTo ("You double clicked me.. Thank You..");
    }
}