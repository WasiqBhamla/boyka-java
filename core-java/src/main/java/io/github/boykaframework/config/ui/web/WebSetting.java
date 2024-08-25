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

package io.github.boykaframework.config.ui.web;

import static io.github.boykaframework.manager.ParallelSession.getSession;
import static io.github.boykaframework.utils.StringUtils.interpolate;
import static io.github.boykaframework.utils.Validator.requireNonNullElse;

import java.util.List;
import java.util.Map;

import io.github.boykaframework.enums.Browser;
import io.github.boykaframework.enums.Protocol;
import io.github.boykaframework.enums.TargetProviders;
import io.github.boykaframework.enums.WindowResizeType;
import lombok.Data;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.PageLoadStrategy;

/**
 * Web settings.
 *
 * @author Wasiq Bhamla
 * @since 24-Feb-2022
 */
@Data
public class WebSetting {
    private static final CommonWebSetting WEB_SETTING = getSession ().getCommonWebSetting ();

    private String              baseUrl;
    private Browser             browser;
    private List<String>        browserOptions;
    private Map<String, Object> capabilities;
    private Dimension           customSize;
    private boolean             headless;
    private boolean             highlight;
    private String              host;
    private PageLoadStrategy    pageLoadStrategy;
    private String              password;
    private String              platform;
    private int                 port;
    private Protocol            protocol;
    private WindowResizeType    resize;
    private TargetProviders     target;
    private String              userName;
    private String              version;

    public String getBaseUrl () {
        return requireNonNullElse (this.baseUrl, WEB_SETTING.getBaseUrl ());
    }

    public Browser getBrowser () {
        return requireNonNullElse (this.browser, WEB_SETTING.getBrowser ());
    }

    public List<String> getBrowserOptions () {
        return requireNonNullElse (this.browserOptions, WEB_SETTING.getBrowserOptions ());
    }

    public Map<String, Object> getCapabilities () {
        return requireNonNullElse (this.capabilities, WEB_SETTING.getCapabilities ());
    }

    public Dimension getCustomSize () {
        return requireNonNullElse (this.customSize, WEB_SETTING.getCustomSize ());
    }

    public String getHost () {
        return requireNonNullElse (this.host, WEB_SETTING.getHost ());
    }

    public PageLoadStrategy getPageLoadStrategy () {
        return requireNonNullElse (this.pageLoadStrategy, WEB_SETTING.getPageLoadStrategy ());
    }

    /**
     * Gets cloud password.
     *
     * @return the cloud password
     */
    public String getPassword () {
        return interpolate (requireNonNullElse (this.password, WEB_SETTING.getPassword ()));
    }

    public String getPlatform () {
        return requireNonNullElse (this.platform, WEB_SETTING.getPlatform ());
    }

    public int getPort () {
        return requireNonNullElse (this.port, WEB_SETTING.getPort ());
    }

    public Protocol getProtocol () {
        return requireNonNullElse (this.protocol, WEB_SETTING.getProtocol ());
    }

    public WindowResizeType getResize () {
        return requireNonNullElse (this.resize, WEB_SETTING.getResize ());
    }

    public TargetProviders getTarget () {
        return requireNonNullElse (this.target, WEB_SETTING.getTarget ());
    }

    /**
     * Gets cloud user name.
     *
     * @return the cloud username.
     */
    public String getUserName () {
        return interpolate (requireNonNullElse (this.userName, WEB_SETTING.getUserName ()));
    }

    public String getVersion () {
        return requireNonNullElse (this.version, WEB_SETTING.getVersion ());
    }

    public boolean isHeadless () {
        return requireNonNullElse (this.headless, WEB_SETTING.isHeadless ());
    }

    public boolean isHighlight () {
        return requireNonNullElse (this.highlight, WEB_SETTING.isHighlight ());
    }
}
