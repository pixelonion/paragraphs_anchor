# Drupal Paragraphs Anchor

paragraphs_anchor is a custom module to add paragraph id field, which is a base
field attached to every paragraph. The value is validated for lowercase letters,
numbers and hyphens. The value is rendered as the id attribute of the paragraph.

## How to install

Add the correct version as custom repositories in composer.json.

```
    ...
    "repositories": [
        {
            "type": "package",
            "package": {
                "name": "pixelonion/paragraphs_anchor",
                "version": "0.3.0",
                "type": "drupal-module",
                "source": {
                    "url": "https://github.com/pixelonion/paragraphs_anchor.git",
                    "type": "git",
                    "reference": "tags/0.3.0"
                }
            }
        }
    ],
    ...
```

Then run `composer require pixelonion/paragraphs_anchor`.
