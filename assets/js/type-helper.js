document.addEventListener('DOMContentLoaded', function(){
    Typed.new(".element", {
        strings: ["Basic Websites.", "Web Applications.", "Corporate Websites.", "E-commerce Applications.", "Hybrid Apps.", "Bots.", "User Interfaces", "More."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 10,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // Fade out instead of backspace (must use CSS class)
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500, // milliseconds
        // loop
        loop: true,
        // null = infinite
        loopCount: null,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});