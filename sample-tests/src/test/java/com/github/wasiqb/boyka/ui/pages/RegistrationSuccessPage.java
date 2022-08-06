package com.github.wasiqb.boyka.ui.pages;

import com.github.wasiqb.boyka.builders.Locator;
import lombok.Getter;
import org.openqa.selenium.By;

/**
 * Registration success page objects
 * @author Faisal Khatri
 * @since 8/2/2022
 **/
@Getter
public class RegistrationSuccessPage {

    public static RegistrationSuccessPage registrationSuccessPage () {
        return new RegistrationSuccessPage ();
    }

    private final Locator continueBtn = Locator.buildLocator ()
        .web (By.cssSelector (".buttons > a.btn-primary"))
        .build ();
    private final Locator pageHeader  = Locator.buildLocator ()
        .web (By.tagName ("h1"))
        .build ();

}
