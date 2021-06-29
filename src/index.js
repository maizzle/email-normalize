module.exports = {
  android: {
    '4.4': [
      {
        css: 'div[style*="margin: 16px 0"] { margin: 0 !important; }',
        description: 'Center email body',
      }
    ]
  },
  apple: {
    all: [
      {
        css: 'a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }',
        description: 'Normalize triggered links, such as dates or phone numbers',
      }
    ]
  },
  generic: [
    {
      css: 'body { margin: 0; padding: 0; }',
      description: 'Reset body margin and padding',
      can_inline: true,
    },
    {
      css: 'h1 { margin: 0.67em 0; font-size: 2em; } h2 { margin: 0.83em 0; font-size: 1.5em; } h3 { margin: 1em 0; font-size: 1.17em; }',
      description: 'Normalize headings. Values used are browser CSS defaults.',
      can_inline: true,
    },
    {
      css: '* { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }',
      description: 'Vendor-prefixed `text-size-adjust` properties were used to render font sizes at under 13px - an antipattern commonly used in footer text in the past.',
      deprecated: 1622494800000, // June 1, 2021
    },
    {
      css: 'img { -ms-interpolation-mode: bicubic !important; }',
      description: '`-ms-interpolation-mode` was used for re-sampling images that needed to stretch. Since IE8, this has been set as `bicubic`. This now only works in IE11, which also has a default of `bicubic`. Outlook also has `bicubic` set as default.',
      can_inline: true,
      deprecated: 1655240400000, // June 15, 2022
    }
  ],
  gmail: {
    all: [
      {
        css: 'u + #body a { color: inherit; text-decoration: none; font-size: inherit; font-weight: inherit; line-height: inherit; }',
        description: 'Normalize links in Gmail',
      },
    ],
    web: [
      {
        css: 'u ~ div img + div > div { display: none; }',
        description: 'Hide the download button on large images',
      }
    ]
  },
  outlook: {
    windows: [
      {
        css: 'table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }',
        description: 'Tables in Outlook on Windows: `border-collapse` removes spaces between tables caused by border size, `mso-table-[l/r]space` ensures no left and right space is added next to tables (Outlook specific CSS attributes)',
        can_inline: true,
      },
      {
        css: 'span.MsoHyperlink, span.MsoHyperlinkFollowed { color: inherit !important; mso-style-priority: 99 !important; }',
        description: 'Fix color of links, including visited ones',
      },
      {
        css: '#outlook a { padding: 0; }',
        description: 'This was used to force Outlook on Windows to provide a "View in Browser" message that the user could click to view the email in their browser',
        deprecated: 1451599200000, // January 2016
      }
    ],
    web: [
      {
        css: '.ReadMsgBody { width: 100%; }',
        description: '`.ExternalClass` was used to target the email body in Hotmail/Outlook.com',
        deprecated: 1613858400000, // February 21, 2021
      },
      {
        css: '.ExternalClass { width: 100%; }',
        description: '`.ExternalClass` was used to target the email body in Hotmail/Outlook.com',
        deprecated: 1613858400000, // February 21, 2021
      },
      {
        css: 'html[dir] h3 { margin: 1em 0; font-size: 1.17em; }',
        description: 'Normalize headings - Outlook.com requires increased specificity. Values used are browser CSS defaults.'
      }
    ],
    ios: [
      {
        css: 'body[data-outlook-cycle] a { color: inherit !important; text-decoration: none; }',
        description: 'Used to reset styling of auto-linked text in the Outlook apps (iOS and Android)',
        deprecated: 1623618000000, // June 14, 2021
      },
    ],
    android: [
      {
        css: 'body[data-outlook-cycle] a { color: inherit !important; text-decoration: none; }',
        description: 'Used to reset styling of auto-linked text in the Outlook apps (iOS and Android)',
        deprecated: 1623618000000, // June 14, 2021
      },
    ]
  },
  yahoo: {
    web: [
      {
        css: '.yshortcuts, .yshortcuts:hover, .yshortcuts:active, .yshortcuts:focus { background-color: none; border: none; color: #000000; text-decoration:none; }',
        description: 'Yahoo! used to convert some keywords in your text to links. Sometimes, if you were using link names to popular items like "Washer & Dryer", Yahoo! inserted a `<span class="yshortcuts">` inside your `<a>` tags.',
        deprecated: 1622494800000, // June 1, 2021
      }
    ]
  }
}
