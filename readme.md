# RNDM Render Plugin: Builder

## About

This plugin provides the core functionality for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-builder
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-builder';
```

## Usage

The Builder plugin allows your application to describe functionality ahead of time through a middleware object for later usage. Ocne it has been described once, ti will be retained for the lifetime of the application.

**Please Note:** This plugin will only create the functionality for the currently running instance and will be purged upon the close of the application. Future presets will include lloca stage versions of this.

**Example**

Below is a simple example of creating a Class in RNDM for future usage:

```json
{
    "type": "react-native.View",
    "props": {
        "middleware": [{
            "middleware": "rndm-builder.prebuild",
            "args": [{
                "type": "TESTTEXT",
                "rndm": {
                    "type": "react-native.View",
                    "props": {
                        "style": {
                            "padding": 20,
                            "backgroundColor": "green"
                        },
                        "children": {
                            "type": "react-native.Text",
                            "props": {
                                "children": "Hello world"
                            }
                        }
                    }
                }
            }]
        }],
        "children": {
            "type": "rndm-builder.TESTTEXT"
        }
    }
}
```

### Changing the Input

The Builder plugin supplies the ability to change properties prior to execution. In the example above, we have created a simple class  with the a background color of green. However, this can be changed in one of two ways:

#### Props

The props property is an Object that can be passed into builder as is. For instance we may want to chang ethe backgroundColor to 'red'. We can do this as below:

**Example**

```json
{
    "type": "react-native.View",
    "props": {
        "middleware": [{
            "middleware": "rndm-builder.prebuild",
            "args": [{
                "type": "TESTTEXT",
                "rndm": {
                    "type": "react-native.View",
                    "props": {
                        "style": {
                            "padding": 20,
                            "backgroundColor": "green"
                        },
                        "children": {
                            "type": "react-native.Text",
                            "props": {
                                "children": "Hello world"
                            }
                        }
                    }
                }
            }]
        }],
        "children": {
            "type": "rndm-builder.TESTTEXT",
            "props": {
                "props": {
                    "props": {
                        "style": {
                            "backgroundColor": "red"
                        }
                    }
                }
            }
        }
    }
}
```


#### Setters

The second way is less verbose and allows a simple key value object. Again we can change the background color to another color. This time we will select 'orange':

**Example**

```json
{
    "type": "react-native.View",
    "props": {
        "middleware": [{
            "middleware": "rndm-builder.prebuild",
            "args": [{
                "type": "TESTTEXT",
                "rndm": {
                    "type": "react-native.View",
                    "props": {
                        "style": {
                            "padding": 20,
                            "backgroundColor": "green"
                        },
                        "children": {
                            "type": "react-native.Text",
                            "props": {
                                "children": "Hello world"
                            }
                        }
                    }
                }
            }]
        }],
        "children": {
            "type": "rndm-builder.TESTTEXT",
            "props": {
                "props": {
                    "props": {
                        "style": {
                            "backgroundColor": "red"
                        }
                    }
                }
            }
        }
    }
}
```

We can combine both options. By default the setters will take priority over the props. However, we can determine the priority order of this merger using the "settersFirst" property as below:

**Example**

```json
{
    "type": "react-native.View",
    "props": {
        "middleware": [{
            "middleware": "rndm-builder.prebuild",
            "args": [{
                "type": "TESTTEXT",
                "rndm": {
                    "type": "react-native.View",
                    "props": {
                        "style": {
                            "padding": 20,
                            "backgroundColor": "green"
                        },
                        "children": {
                            "type": "react-native.Text",
                            "props": {
                                "children": "Hello world"
                            }
                        }
                    }
                }
            }]
        }],
        "children": {
            "type": "rndm-builder.TESTTEXT",
            "props": {
                "settersFirst": true,
                "props": {
                    "props": {
                        "style": {
                            "backgroundColor": "red"
                        }
                    }
                },
                "setters": {
                    "props.style.backgroundColor": "orange"
                }
            }
        }
    }
}
```
