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

package com.github.wasiqb.boyka.actions;

import com.github.wasiqb.boyka.actions.interfaces.elements.IFingersActions;
import com.github.wasiqb.boyka.builders.Locator;

public class FingersActions extends FingerActions implements IFingersActions {
    public static IFingersActions withFingers (final Locator locator) {
        return new FingersActions (locator);
    }

    FingersActions (final Locator locator) {
        super (locator);
    }

    @Override
    public void zoomIn () {
        // TODO: need to implement.
    }

    @Override
    public void zoomOut () {
        // TODO: need to implement.
    }
}