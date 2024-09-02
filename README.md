# blend.css

Blend.css is a minimal, component based UI library.

It allows you to write and maintain user interfaces with clean, parameterizable code, using adaptable, nestable and ready-to-use components that are configurable in their parameters.

It is not intended to be modified by means of classes, but by well-defined descriptive properties, with the aim of writing code that is readable by developers without prior knowledge.


## Components

Blend.css works around a few key components that can be nested and parameterized separately or together.

All components are configurable using HTML tags that begin with the `bl-` prefix and can be configured using their properties.

Although many core components use the `bl-` prefix, some internal elements use standard HTML in order to minimize the weight of the library. In the case of `bl-input`, its internal elements are used to create parts that most inputs use, such as **labels**, **icons**, **links**, and others.

- [Inputs](#inputs)
  - Text
  - Textarea
  - Button
  - Checkbox
  - Radio
  - File
  - Select
- Dropdown
- List
  - Item
- Avatar


## Inputs

The `<bl-input>` component is the core of inputs, buttons and form selectors. With it you can create text fields, textarea, button, checkbox, radio, file and select inputs. 

### Minimal use

```html
<bl-input>
	<input type="text" placeholder="This is an input" />
</bl-input>
```
![](docs/input/text.png)

### Extended use

Obviously most form fields require extra internal components to adapt to different scenarios.
Some of them need to be in a specific position to work correctly.
**The internal components currently available are:**

| **TAG** | Common use | Restriction |
| ----- | ----- | ----- |
| **label** | To display the input name, it is usually located in the top left section of the input. | It must be the first tag of the input    |
| **i** | Represents the input icon, I recommend the [UI Icons library](https://www.flaticon.com/uicons/interface-icons), but you can use the one you prefer. | - |
| **a** | To display an comment or actions related to the input, it is usually located in the top right section of the input. | - |
| **pre** | To display a prefix or suffix for an input. | - |
| **kbd** | To display a key shortcut or annotation for an input, it is usually represented as a box similar to a keyboard button. | - |


```html
<bl-input>
	<label>User name</label>
	<i class="fi fi-rr-user"></i>
	<a href="/signUp">SignUp</i>
  <pre>https://</pre>
	<input type="text" placeholder="This is an input" />
	<kbd>⌘R</kbd>
</bl-input>
```
![](docs/input/text-extended.png)

### Input modifiers

To modify the inputs to their different variants you can use the following properties:

| **Property** | Effect | Availability |
| ----- | ----- | ----- |
| **clean** | removes outline and padding. | `checkbox`, `radio` |
| **inset** | causes label incorporation. | `all` |
| **overlap** | causes label overlap. | `all` |
| **error** | for error coloring. | `all` |
| **success** | for success coloring. | `all` |

[static] disable expansion
[inline] removes division lines
[column] transforms layout in columns