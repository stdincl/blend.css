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
	<a href="/signUp">SignUp</a>
	<pre>https://</pre>
	<input type="text" placeholder="This is an input" />
	<kbd>⌘R</kbd>
</bl-input>
```
![](docs/input/text-extended.png)

### Input modifiers
There are four types of modifiers for inputs, **composition**, **status**, **layout** and **auxiliary** modifiers.
- **composition** modifiers change the composition of the input.
- **status** modifiers modify the color.
- **layout** modifiers change de layout of [Blended components](#blended).
- **auxiliary** modifiers change some extra characteristics.

It is possible to mix **composition**, **status**, **layout** and **auxiliary** modifiers with each other.
Only **auxiliary** and **layout** modifiers can be combined with each other.
You can select the modifier you want by simply assigning the corresponding property to the input, for example **[inset]**:
```html
<bl-input inset> <!-- inset property here -->
	<label>User name</label>
	<i class="fi fi-rr-user"></i>
	<a href="/signUp">SignUp</a>
	<pre>https://</pre>
	<input type="text" placeholder="This is an input" />
	<kbd>⌘R</kbd>
</bl-input>
```

| **Type**		| **Property**	| Effect						|									|
| -				| -				| -								| -									|
| composition	| **inset**		| Causes label incorporation	| ![](docs/input/inset.png)	|
| composition	| **overlap**	| Causes label overlap			| ![](docs/input/overlap.png)	|

| **Type**		| **Property**	| Effect						| 									|
| -				| -				| -								| -									|
| status		| **error**		| Error coloring				| ![](docs/input/error.png) 		|
| status		| **success**	| Success coloring				| ![](docs/input/success.png) 		|
| status		| **disabled**	| Disabled coloring				| ![](docs/input/disabled.png) 		|

| **Type**		| **Property**	| Effect						| Availability 						| 									|
| -				| -				| -								| -									| - 								|
| auxiliary		| **clean**		| Removes outline and paddings	| `checkbox` `radio`				| ![](docs/input/clean.png) |
| auxiliary		| **reverse**	| Reverses de input composition | `any`								| ![](docs/input/reverse.png) |

| **Type**		| **Property**	| Effect						| Availability 						| Target		| 									|
| -				| -				| -								| -									| -				| - 								|
| layout		| **static**	| disable expansion				| [Blended components](#blended)	| nested input	| ![](docs/input/static.png) 		|
| layout		| **inline**	| removes division lines		| [Blended components](#blended)	| root input	| ![](docs/input/inline.png) 		|
| layout		| **column**	| transforms layout to columns	| [Blended components](#blended)	| root input	| ![](docs/input/column.png) 		|



### Blended components

You can combine multiple components into one by simply nesting them, in the case of inputs you can nest them like this:

```html
<bl-input>
	<label>Search on internet</label>
	<a>required</a>
	<bl-input>
		<i class="fi fi-rr-search"></i>
		<input type="text" placeholder="What do you want to search for?" />
	</bl-input>
	<bl-input>
		<input type="checkbox" placeholder="username" />
		<label>I feel lucky</label>
	</bl-input>
</bl-input>
```
![](docs/input/blended.png) 

All the properties of the root input will be applied on its nested inputs and you will be able to apply the layout type modifiers on it.

In the previous example the checkbox should not be the same size as the search field, to solve that you can apply the static property on the input corresponding to the checkbox as follows:

```html
<bl-input>
	<label>Search on internet</label>
	<a>required</a>
	<bl-input>
		<i class="fi fi-rr-search"></i>
		<input type="text" placeholder="What do you want to search for?" />
	</bl-input>
	<bl-input static> <!-- static property -->
		<input type="checkbox" placeholder="username" />
		<label>I feel lucky</label>
	</bl-input>
</bl-input>
```

![](docs/input/static.png)


If you need a more continuous interface you can remove internal elements with the inline property as follows:

```html
<bl-input inline> <!-- inline property -->
	<label>Search on internet</label>
	<a>required</a>
	<bl-input>
		<i class="fi fi-rr-search"></i>
		<input type="text" placeholder="What do you want to search for?" />
	</bl-input>
	<bl-input static>
		<input type="checkbox" placeholder="username" />
		<label>I feel lucky</label>
	</bl-input>
</bl-input>
```
![](docs/input/inline.png)

By default nested elements are aligned horizontally. You can change to column alignment with the column property follows:

```html
<bl-input column> <!-- column property -->
	<label>Search on internet</label>
	<a>required</a>
	<bl-input>
		<i class="fi fi-rr-search"></i>
		<input type="text" placeholder="What do you want to search for?" />
	</bl-input>
	<bl-input>
		<input type="checkbox" placeholder="username" />
		<label>I feel lucky</label>
	</bl-input>
</bl-input>
```
![](docs/input/column.png)

In a more real-world example, a login form could be coded like this:
```html
<bl-input column>
	<label>Sign In</label>
	<a href>Sign Up</a>
	<bl-input inset>
		<label>Username</label>
		<i class="fi fi-rr-user"></i>
		<input type="text" placeholder="jhon" />
	</bl-input>
	<bl-input inset>
		<label>Password</label>
		<i class="fi fi-rr-lock"></i>
		<input type="text" placeholder="····" />
	</bl-input>
</bl-input>
```

![](docs/input/signin.png)


