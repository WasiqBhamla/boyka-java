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

package io.github.boykaframework.actions.interfaces.listeners.drivers;

import java.time.Duration;

import io.github.boykaframework.actions.interfaces.listeners.BoykaListener;

/**
 * Handle all driver actions event.
 *
 * @author Wasiq Bhamla
 * @since 09-Apr-2023
 */
public interface IDriverActionsListener extends BoykaListener {
    /**
     * Handles get capability method
     *
     * @param capability Name of capability
     */
    default void onCapability (final String capability) {
        // not implemented.
    }

    /**
     * Handle execute script method.
     *
     * @param script Script to be executed
     * @param args Arguments to be used in the script
     */
    default void onExecuteScript (final String script, final Object... args) {
        // not implemented.
    }

    /**
     * Handle pause method.
     *
     * @param time Time till executions to be paused
     */
    default void onPause (final Duration time) {
        // not implemented.
    }

    /**
     * Handle save logs method.
     */
    default void onSaveLogs () {
        // not implemented.
    }

    /**
     * Handles verify capability method.
     *
     * @param capability Name of capability
     */
    default void onVerifyCapability (final String capability) {
        // not implemented.
    }

    /**
     * Handle wait until method.
     */
    default void onWaitUntil () {
        // not implemented.
    }
}
