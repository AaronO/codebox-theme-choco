define([
    'ace/theme'
], function(aceTheme) {
    var themes = codebox.require("core/themes");

    var bgDarker = "#202020";
    var colorDarker = "#F8F8F2";

    var bgDark = "#282828";
    var colorDark = "#F8F8F2";

    var bgNormal = "#333333";
    var colorNormal = "#eee";

    var bgLight = "#2b303b";
    var colorLight = "#dadfe6";

    themes.add({
        id: "monokai",
        title: "Monokai",

        editor: {
            'theme': aceTheme
        },
        styles: {
            // Top menubar
            menubar: {
                'background': bgDarker,
                'color': colorDark,
                'border-color': "#111",

                button: {
                    'border-color': bgNormal
                }
            },

            // Statusbar
            statusbar: {
                'background': bgDarker,
                'color': colorDark,
                'border-color': "#111",

                button: {
                    'border-color': bgNormal
                }
            },

            // Lateral bar panels
            lateralbar: {
                'background': bgDark,

                commands: {
                    'background': bgDark,
                    'color': colorLight
                },
                body: {
                    'color': colorDark
                }
            },

            // Body
            body: {
                'background': bgDark
            },

            // Tabs
            tabs: {
                section: {
                    'border-color': bgDark
                },
                header: {
                    'background': bgDark,
                    'color': colorDark
                },
                content: {
                    'background': bgLight,
                },
                tab: {
                    '&.active': {
                        'background': bgLight,
                        'color': colorLight
                    }
                }
            },

            // Operations
            operations: {
                operation: {
                    'background': bgLight,
                    'color': "#fff",
                    'border-color': "transparent"
                }
            },

            // Alerts
            alerts: {
                alert: {
                    'background': bgLight,
                    'color': colorLight,
                    'border-color': "transparent"
                }
            },

            // Palette
            palette: {
                'background': bgDark,
                'border-color': bgDarker,

                input: {
                    'background': bgLight,
                    'border-color': bgDarker,
                    'color': colorLight
                },

                results: {
                    'background': bgLight,
                    'border-color': bgDarker,
                    'color': colorLight,

                    command: {
                        'border-color': bgDarker
                    }
                }
            }
        }
    });
});
