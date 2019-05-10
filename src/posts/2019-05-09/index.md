---
path: '/component-level-key-listener'
date: '2019-05-09'
title: 'Component-level key listener'
tags: ['first']
excerpt: 'Key listeners are inherently bound to input elements. This makes sense but presents a challenge when you want to continuously listen for key strokes and respond when a component has no input element. '
---

# Component-level key listener

Key listeners are inherently bound to input elements. This makes sense but presents a challenge when you want to continuously listen for key strokes and respond when a component has no input element.

Take the example of an informational modal or pop-up. It would be logical that the user be able to go back to the previously rendered view by hitting the escape key.

Let's make that functionality.

### Make the div focus-able

For starters, there must be some element that accepts input—there's no away around it. You can't just slap a tabIndex property to a div and call it a day. But that's exactly where we'll to start:

    <div tabIndex='0' onKeyUp={ (e)=>console.log('typing...') } >
    	[...]
    </div>

You'll quickly find that key-up events aren't registering until after the user's clicked within the div. Clicking the div into focus is not ideal and works against a positive user experience.

Recall that a modal or pop-up typically has some UI element to close its view and go back. Make sure this is done through a button element, not an image tag with an event handler attached. Give this button an autoFocus attribute. In essence, the parent div "inherits" focus from its child (the button's in focus, but events will bubble and be caught by its parent).

Not only does this free the user from having to click within the div to focus it, it's also an a11y best practice.

Make sure you're doing this:

    <button autoFocus onClick={ ()=> close(); } >
    	<img src={ backButton } />
    </button>

Not this:

    <img src={ backButton } onClick={ ()=> close(); } />

Now, a11y best practice would frown upon disabling an element's focus outline (you know, the light blue border around active input elements). For the sake of a nicer UI, I've chosen to hide this outline in CSS. (note the inclusion of the div:focus selector, tabIndex will add an outline to the div, a rather unattractive side effect)

     button:focus, div:focus {
    	outline: 0
     }

Our example now looks like this:

    <div tabIndex='0' onKeyUp={ (e)=> e.keyCode === 27 ? close() : null } >
    	<button autoFocus onClick={ ()=> close(); } >
    		<img src={ backButton } />
    	</button>
    </div>

### Plot twist!

The example above works best with simple modals and pop-ups, not ones that allow the user to edit additional information—say in the example of a contact list.

Let's reasess.

The user should still be able to navigate backwards by hitting the escape key. Our modal, however, allows the user to edit information. Clicking an edit button will transform a static view of contact information into an editable one. But the user now expects the escape key to cancel edits.

    // this works, but you'll never see it
    <form onKeyUp={ (e)=> e.keyCode === 27 ? setIsEditing(!isEditing) : null }>
    	[...]
    </form>

Event bubbling, however, causes the escape key to go all the way back. Not just the current edit view. We need to suppress event bubbling in children components.

    <form onKeyUp={ (e)=> {
    	if (e.keyCode === 27) {
    		e.stopPropagation();
    		setIsEditing(!isEditing); }
    		}
    	} >
    	[...]
    </form>

Great! The user can now hit escape within the editable form and go back to viewing static information.

But the user can't hit escape again to go back another view. Our form retains focus and this requires the user to, once again, click on the div to change focus restoring escape key functionality.

We're right back to where we started. Ugh!

### The fix!

Let's explicitly tell our form where focus should go next.

We'll start by creating a reference to our back button:

    const backButtonRef = React.createRef();

    return (
    <button autoFocus ref={ backButtonRef } onClick={ ()=> close(); } >
     [...]

And calling it within our form:

    <form onKeyUp={ (e)=> {
    	if (e.keyCode === 27) {
    		e.stopPropagation();
    		setIsEditing(!isEditing);
    		backButtonRef.current.focus(); }
    		}
    	} >
    	[...]
    </form>

That's it! Now hitting escape from the edit view will restore the modal to its un-edited state. Hitting escape once more will render the previous view—all without clicking the mouse!

Yes, it may be a bit much to go through all this for just some simple functionality (and maybe there's an easier way of doing this that I'm not aware of), but it's these small details that makes the user's experience that much more enjoyable.
