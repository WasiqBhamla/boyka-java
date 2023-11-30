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

package com.github.wasiqb.boyka.config;

import static com.github.wasiqb.boyka.enums.TestDataSource.EXCEL;

import com.github.wasiqb.boyka.enums.TestDataSource;
import lombok.Data;

/**
 * Test Data Setting.
 *
 * @author Wasiq Bhamla
 * @since 18-Nov-2023
 */
@Data
public class TestDataSetting {
    private String         extension = "xlsx";
    private boolean        external;
    private String         path      = "test-data";
    private TestDataSource type      = EXCEL;
}
