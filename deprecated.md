# Deprecated

All of the following resets have been tested and are no longer necessary.

### #outlook a

Deprecated: 2016?

```css
#outlook a {
  padding: 0;
}
```

This was used to force Outlook on Windows to provide a "View in Browser" message that the user could click to view the email in their browser.

While this was never intended for _styling_ purposes, we've included it since it can (still!) be commonly found in 'email reset boilerplate' code, and it can be safely removed.

### .ReadMsgBody

Deprecated: February 2021

```css
.ReadMsgBody {
  width: 100%;
}
```

The `.ReadMsgBody` class was used to force Hotmail/Outlook.com to display the email at full width.

### .ExternalClass

Deprecated: February 2021

```css
.ExternalClass {
  width: 100%;
}
```

`.ExternalClass` was also used to target Hotmail/Outlook.com.

This was also used to reset the line-height:

```css
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass td,
.ExternalClass div {
  line-height: 100%;
}
```

### *-text-size-adjust

Deprecated: June 2021

```css
* {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
```

`webkit-` and `ms-` prefixed `text-size-adjust` were used to render font sizes under 13px - an antipattern commonly used in footer text in the past.

It is now common practice to use a 14px minimum font size, for legibility.

### -ms-interpolation-mode

Deprecated: [June 15, 2022](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-internet-explorer-)

```css
img {
  -ms-interpolation-mode: bicubic !important;
}
```

`-ms-interpolation-mode` was used for re-sampling images that needed to stretch.

Since IE8, this has been set as `bicubic`.

This now only works in IE11, which also has a default of `bicubic`. Outlook also has `bicubic` set as default, so no need to specify it anymore.

### .yshortcuts a

Deprecated: N/A

```css
.yshortcuts,
.yshortcuts:hover,
.yshortcuts:active,
.yshortcuts:focus {
  background-color: none;
  border: none;
  color: #000000;
  text-decoration:none;
}
```

Yahoo! used to convert some keywords in your text to links.

Sometimes, if you were using link names to popular items like "Washer & Dryer", Yahoo! inserted a `<span class="yshortcuts">` inside your `<a>` tags.

### data-outlook-cycle

Deprecated: June 14, 2021

```css
body[data-outlook-cycle] a {
  color: inherit !important;
  text-decoration: none;
}
```

This was used to reset styling of auto-linked text in the Outlook apps (iOS and Android), but an update rolling out since June 14<sup>th</sup> 2021 has rendered this useless.
