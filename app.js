/* ═══════════════════════════════════════════════════════════
   PseudoCode Tutor — app.js
   WSU Diploma in ICT | CNET Development 1 style pseudocode
═══════════════════════════════════════════════════════════ */

/* ── STATE ── */
let visitedLessons = new Set();
let currentLesson  = -1;  // -1 = welcome

/* ── LESSONS DATA ── */
const lessons = [
  /* 0 */ {
    icon: '📖',
    title: 'What is Pseudocode?',
    subtitle: 'Understanding the purpose and rules of writing pseudocode.',
    render: () => `
      ${tag('Introduction')}
      ${h('What is Pseudocode?')}
      ${prose(`Pseudocode is a <strong>plain-language description</strong> of the steps in an algorithm or program. It is not a real programming language — it cannot be run by a computer. Instead, it is used to <strong>plan and communicate logic</strong> before writing actual code.`)}
      ${prose(`Think of it as writing down what you want the computer to do, in structured English. It sits between a flowchart and real code.`)}

      ${h('Why do we use Pseudocode?')}
      <div class="info-grid">
        ${icard('Plan First', 'Think through logic before coding')}
        ${icard('Language-Free', 'Not tied to Python, Java, or C++')}
        ${icard('Easy to Read', 'Anyone can understand it')}
        ${icard('Spot Errors', 'Catch logic bugs before coding')}
      </div>

      ${h('WSU Pseudocode Rules')}
      ${prose('At Walter Sisulu University, pseudocode follows a specific style. These are the key rules:')}
      <div class="callout">
        <strong>WSU Style Rules:</strong><br>
        • Keywords are written in <strong>UPPERCASE</strong> (START, STOP, DECLARE, INPUT, OUTPUT, IF, WHILE, FOR)<br>
        • Variable names are written in <strong>lowercase</strong> (num1, total, average)<br>
        • Every program starts with <strong>START</strong> and ends with <strong>STOP</strong><br>
        • Assignment uses the arrow symbol: <strong>←</strong><br>
        • Strings (text) are wrapped in <strong>"double quotes"</strong>
      </div>

      ${h('A Simple Example')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">name</span> : <span class="kw">STRING</span>
<span class="kw-io">OUTPUT</span> <span class="str">"What is your name?"</span>
<span class="kw-io">INPUT</span> <span class="var">name</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Hello, "</span>, <span class="var">name</span>
<span class="kw-stop">STOP</span>`, 'Example')}
    `
  },

  /* 1 */ {
    icon: '🚀',
    title: 'START and STOP',
    subtitle: 'Every pseudocode program has a clear beginning and end.',
    render: () => `
      ${tag('Program Structure')}
      ${h('START and STOP')}
      ${prose('Every pseudocode program must begin with <strong>START</strong> and end with <strong>STOP</strong>. These keywords act like the opening and closing brackets of your program. Nothing in the program runs before START or after STOP.')}

      ${code(`<span class="kw">START</span>
  <span class="cmt">// all your code goes here</span>
<span class="kw-stop">STOP</span>`, 'Structure')}

      ${h('A Complete Example')}
      ${code(`<span class="kw">START</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Good morning!"</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Welcome to pseudocode."</span>
<span class="kw-stop">STOP</span>`, 'Example')}

      <div class="callout callout-warn">
        <strong>Remember:</strong> START is written at the very top and STOP at the very bottom. Every line of your program lives between them.
      </div>

      ${h('What Happens Without START/STOP?')}
      ${prose('Your program is considered <strong>incomplete</strong> and will lose marks in assignments. Always include both keywords, even for very short programs.')}
    `
  },

  /* 2 */ {
    icon: '📦',
    title: 'DECLARE — Variables',
    subtitle: 'How to create and name storage locations for data.',
    render: () => `
      ${tag('Variables')}
      ${h('What is a Variable?')}
      ${prose('A variable is a <strong>named storage location</strong> in memory. Before using a variable in pseudocode you must declare it — telling the program its name and the type of data it will hold.')}

      ${h('DECLARE Syntax')}
      ${code(`<span class="kw">DECLARE</span> <span class="var">variableName</span> : <span class="kw">DATATYPE</span>`, 'Syntax')}

      ${prose('You can also declare multiple variables of the same type on one line:')}
      ${code(`<span class="kw">DECLARE</span> <span class="var">num1</span>, <span class="var">num2</span> : <span class="kw">REAL</span>
<span class="kw">DECLARE</span> <span class="var">total</span>, <span class="var">average</span> : <span class="kw">REAL</span>`, 'Multiple')}

      ${h('Data Types')}
      <table class="styled-table">
        <thead><tr><th>Type</th><th>Holds</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>INTEGER</td><td>Whole numbers only</td><td>5, -3, 100</td></tr>
          <tr><td>REAL</td><td>Numbers with decimals</td><td>3.14, 9.99, -2.5</td></tr>
          <tr><td>STRING</td><td>Text / words</td><td>"Hello", "John"</td></tr>
          <tr><td>BOOLEAN</td><td>True or False only</td><td>TRUE, FALSE</td></tr>
          <tr><td>CHAR</td><td>A single character</td><td>'A', '5', '!'</td></tr>
        </tbody>
      </table>

      ${h('Full Example with Multiple Types')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">age</span> : <span class="kw">INTEGER</span>
<span class="kw">DECLARE</span> <span class="var">salary</span> : <span class="kw">REAL</span>
<span class="kw">DECLARE</span> <span class="var">firstName</span>, <span class="var">lastName</span> : <span class="kw">STRING</span>
<span class="kw">DECLARE</span> <span class="var">isStudent</span> : <span class="kw">BOOLEAN</span>
<span class="kw-stop">STOP</span>`, 'Example')}

      <div class="callout">
        <strong>WSU Tip:</strong> Always DECLARE all variables at the top of your program, right after START. Never declare a variable in the middle of your logic.
      </div>
    `
  },

  /* 3 */ {
    icon: '⌨️',
    title: 'INPUT and OUTPUT',
    subtitle: 'Getting data from the user and displaying results.',
    render: () => `
      ${tag('I/O Operations')}
      ${h('INPUT')}
      ${prose('<strong>INPUT</strong> is used to read a value from the user and store it in a variable. Think of it as asking the user to type something.')}
      ${code(`<span class="kw-io">INPUT</span> <span class="var">variableName</span>`, 'Syntax')}

      ${h('OUTPUT')}
      ${prose('<strong>OUTPUT</strong> is used to display information on the screen. You can output a string, a variable, or both together separated by a comma.')}
      ${code(`<span class="kw-io">OUTPUT</span> <span class="str">"A message"</span>
<span class="kw-io">OUTPUT</span> <span class="var">variableName</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Label = "</span>, <span class="var">variableName</span>`, 'Syntax')}

      <div class="callout callout-warn">
        <strong>WSU Rule:</strong> We use <strong>OUTPUT</strong> (not WRITE or PRINT) and <strong>INPUT</strong> (not READ or GET). Using the wrong keyword loses marks.
      </div>

      ${h('Full Example')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">num1</span>, <span class="var">num2</span> : <span class="kw">INTEGER</span>
<span class="kw">DECLARE</span> <span class="var">total</span> : <span class="kw">INTEGER</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter first number"</span>
<span class="kw-io">INPUT</span> <span class="var">num1</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter second number"</span>
<span class="kw-io">INPUT</span> <span class="var">num2</span>
<span class="var">total</span> <span class="arr">←</span> <span class="var">num1</span> + <span class="var">num2</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Total = "</span>, <span class="var">total</span>
<span class="kw-stop">STOP</span>`, 'Example')}

      ${h('Common Mistakes to Avoid')}
      ${prose('<strong>Wrong:</strong> WRITE "Enter a number" &nbsp;→&nbsp; Should be OUTPUT<br><strong>Wrong:</strong> READ num1 &nbsp;→&nbsp; Should be INPUT<br><strong>Wrong:</strong> PRINT result &nbsp;→&nbsp; Should be OUTPUT')}
    `
  },

  /* 4 */ {
    icon: '↙',
    title: 'Assignment Operator ←',
    subtitle: 'How to store values into variables during program execution.',
    render: () => `
      ${tag('Assignment')}
      ${h('The Assignment Arrow ←')}
      ${prose('The assignment operator <strong>←</strong> is used to store a value into a variable. Read it as <strong>"gets the value of"</strong>. The variable is always on the <strong>left</strong>, and the value or expression is on the <strong>right</strong>.')}

      ${code(`<span class="var">variableName</span> <span class="arr">←</span> value_or_expression`, 'Syntax')}

      ${h('Simple Assignments')}
      ${code(`<span class="var">age</span> <span class="arr">←</span> <span class="num">21</span>
<span class="var">name</span> <span class="arr">←</span> <span class="str">"Sipho"</span>
<span class="var">price</span> <span class="arr">←</span> <span class="num">49.99</span>
<span class="var">isActive</span> <span class="arr">←</span> <span class="kw">TRUE</span>`, 'Examples')}

      ${h('Expression Assignments')}
      ${prose('The right side can be a calculation or expression. The result is computed first, then stored in the variable.')}
      ${code(`<span class="var">total</span> <span class="arr">←</span> <span class="var">price</span> + <span class="var">tax</span>
<span class="var">average</span> <span class="arr">←</span> (<span class="var">num1</span> + <span class="var">num2</span> + <span class="var">num3</span>) / <span class="num">3</span>
<span class="var">area</span> <span class="arr">←</span> <span class="var">length</span> * <span class="var">width</span>
<span class="var">counter</span> <span class="arr">←</span> <span class="var">counter</span> + <span class="num">1</span>   <span class="cmt">// increase by 1</span>`, 'Expressions')}

      <div class="callout">
        <strong>Note:</strong> <span class="var">counter</span> ← <span class="var">counter</span> + 1 is valid! It reads the current value of counter, adds 1, then stores the new value back into counter.
      </div>

      ${h('Full Example')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">length</span>, <span class="var">width</span>, <span class="var">area</span>, <span class="var">perimeter</span> : <span class="kw">REAL</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter length"</span>
<span class="kw-io">INPUT</span> <span class="var">length</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter width"</span>
<span class="kw-io">INPUT</span> <span class="var">width</span>
<span class="var">area</span> <span class="arr">←</span> <span class="var">length</span> * <span class="var">width</span>
<span class="var">perimeter</span> <span class="arr">←</span> <span class="num">2</span> * (<span class="var">length</span> + <span class="var">width</span>)
<span class="kw-io">OUTPUT</span> <span class="str">"Area = "</span>, <span class="var">area</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Perimeter = "</span>, <span class="var">perimeter</span>
<span class="kw-stop">STOP</span>`, 'Full Example')}
    `
  },

  /* 5 */ {
    icon: '🔢',
    title: 'Arithmetic Operations',
    subtitle: 'Performing calculations: add, subtract, multiply, divide.',
    render: () => `
      ${tag('Arithmetic')}
      ${h('Arithmetic Operators')}
      <table class="styled-table">
        <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>+</td><td>Addition</td><td>5 + 3</td><td>8</td></tr>
          <tr><td>-</td><td>Subtraction</td><td>10 - 4</td><td>6</td></tr>
          <tr><td>*</td><td>Multiplication</td><td>6 * 7</td><td>42</td></tr>
          <tr><td>/</td><td>Division</td><td>15 / 4</td><td>3.75</td></tr>
          <tr><td>MOD</td><td>Remainder (modulus)</td><td>15 MOD 4</td><td>3</td></tr>
          <tr><td>DIV</td><td>Integer division</td><td>15 DIV 4</td><td>3</td></tr>
        </tbody>
      </table>

      ${h('BODMAS / Order of Operations')}
      ${prose('Pseudocode follows standard mathematical order: Brackets → Division/Multiplication → Addition/Subtraction. Always use brackets when in doubt.')}
      ${code(`<span class="var">result</span> <span class="arr">←</span> <span class="num">2</span> + <span class="num">3</span> * <span class="num">4</span>       <span class="cmt">// result = 14 (not 20)</span>
<span class="var">result</span> <span class="arr">←</span> (<span class="num">2</span> + <span class="num">3</span>) * <span class="num">4</span>     <span class="cmt">// result = 20</span>
<span class="var">avg</span> <span class="arr">←</span> (<span class="var">a</span> + <span class="var">b</span> + <span class="var">c</span>) / <span class="num">3</span>   <span class="cmt">// always bracket the numerator</span>`, 'Order of Operations')}

      ${h('Four-Operation Example (WSU Style)')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">num1</span>, <span class="var">num2</span> : <span class="kw">REAL</span>
<span class="kw">DECLARE</span> <span class="var">addition</span>, <span class="var">subtraction</span>, <span class="var">multiplication</span>, <span class="var">division</span> : <span class="kw">REAL</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter the first number"</span>
<span class="kw-io">INPUT</span> <span class="var">num1</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter the second number"</span>
<span class="kw-io">INPUT</span> <span class="var">num2</span>
<span class="var">addition</span> <span class="arr">←</span> <span class="var">num1</span> + <span class="var">num2</span>
<span class="var">subtraction</span> <span class="arr">←</span> <span class="var">num1</span> - <span class="var">num2</span>
<span class="var">multiplication</span> <span class="arr">←</span> <span class="var">num1</span> * <span class="var">num2</span>
<span class="var">division</span> <span class="arr">←</span> <span class="var">num1</span> / <span class="var">num2</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Addition = "</span>, <span class="var">addition</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Subtraction = "</span>, <span class="var">subtraction</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Multiplication = "</span>, <span class="var">multiplication</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Division = "</span>, <span class="var">division</span>
<span class="kw-stop">STOP</span>`, 'WSU Four-Operation')}
    `
  },

  /* 6 */ {
    icon: '🤔',
    title: 'Comparison & Logic Operators',
    subtitle: 'Comparing values and combining conditions.',
    render: () => `
      ${tag('Operators')}
      ${h('Comparison Operators')}
      ${prose('Used to compare two values. They always return a BOOLEAN result (TRUE or FALSE).')}
      <table class="styled-table">
        <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>=</td><td>Equal to</td><td>age = 18</td></tr>
          <tr><td>≠ or &lt;&gt;</td><td>Not equal to</td><td>score &lt;&gt; 0</td></tr>
          <tr><td>&gt;</td><td>Greater than</td><td>mark &gt; 50</td></tr>
          <tr><td>&lt;</td><td>Less than</td><td>price &lt; 100</td></tr>
          <tr><td>≥ or &gt;=</td><td>Greater than or equal</td><td>age &gt;= 18</td></tr>
          <tr><td>≤ or &lt;=</td><td>Less than or equal</td><td>temp &lt;= 0</td></tr>
        </tbody>
      </table>

      ${h('Logical Operators')}
      <table class="styled-table">
        <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>AND</td><td>Both conditions must be TRUE</td><td>age &gt;= 18 AND age &lt;= 65</td></tr>
          <tr><td>OR</td><td>At least one condition must be TRUE</td><td>day = "Sat" OR day = "Sun"</td></tr>
          <tr><td>NOT</td><td>Reverses the boolean</td><td>NOT (score = 0)</td></tr>
        </tbody>
      </table>

      ${h('Examples in Use')}
      ${code(`<span class="cmt">// Check if a student passes (mark >= 50)</span>
<span class="kw-if">IF</span> <span class="var">mark</span> &gt;= <span class="num">50</span> <span class="kw-if">THEN</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"You passed!"</span>
<span class="kw-if">END IF</span>

<span class="cmt">// Using AND</span>
<span class="kw-if">IF</span> <span class="var">age</span> &gt;= <span class="num">18</span> <span class="kw">AND</span> <span class="var">age</span> &lt;= <span class="num">65</span> <span class="kw-if">THEN</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"Working age"</span>
<span class="kw-if">END IF</span>`, 'Examples')}
    `
  },

  /* 7 */ {
    icon: '🔀',
    title: 'IF...THEN...ELSE',
    subtitle: 'Making decisions in your program based on conditions.',
    render: () => `
      ${tag('Selection')}
      ${h('IF Statement')}
      ${prose('An IF statement lets the program choose between different paths depending on whether a condition is true or false. There are three forms:')}

      ${h('Form 1 — Simple IF')}
      ${code(`<span class="kw-if">IF</span> condition <span class="kw-if">THEN</span>
  <span class="cmt">// runs only when condition is TRUE</span>
<span class="kw-if">END IF</span>`, 'Simple IF')}

      ${h('Form 2 — IF with ELSE')}
      ${code(`<span class="kw-if">IF</span> condition <span class="kw-if">THEN</span>
  <span class="cmt">// runs when condition is TRUE</span>
<span class="kw-if">ELSE</span>
  <span class="cmt">// runs when condition is FALSE</span>
<span class="kw-if">END IF</span>`, 'IF...ELSE')}

      ${h('Form 3 — IF with ELSE IF')}
      ${code(`<span class="kw-if">IF</span> condition1 <span class="kw-if">THEN</span>
  <span class="cmt">// runs when condition1 is TRUE</span>
<span class="kw-if">ELSE IF</span> condition2 <span class="kw-if">THEN</span>
  <span class="cmt">// runs when condition2 is TRUE</span>
<span class="kw-if">ELSE</span>
  <span class="cmt">// runs when none are TRUE</span>
<span class="kw-if">END IF</span>`, 'IF...ELSE IF...ELSE')}

      ${h('Full Example — Grade Calculator')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">mark</span> : <span class="kw">INTEGER</span>
<span class="kw">DECLARE</span> <span class="var">grade</span> : <span class="kw">STRING</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter your mark"</span>
<span class="kw-io">INPUT</span> <span class="var">mark</span>
<span class="kw-if">IF</span> <span class="var">mark</span> &gt;= <span class="num">75</span> <span class="kw-if">THEN</span>
  <span class="var">grade</span> <span class="arr">←</span> <span class="str">"Distinction"</span>
<span class="kw-if">ELSE IF</span> <span class="var">mark</span> &gt;= <span class="num">60</span> <span class="kw-if">THEN</span>
  <span class="var">grade</span> <span class="arr">←</span> <span class="str">"Merit"</span>
<span class="kw-if">ELSE IF</span> <span class="var">mark</span> &gt;= <span class="num">50</span> <span class="kw-if">THEN</span>
  <span class="var">grade</span> <span class="arr">←</span> <span class="str">"Pass"</span>
<span class="kw-if">ELSE</span>
  <span class="var">grade</span> <span class="arr">←</span> <span class="str">"Fail"</span>
<span class="kw-if">END IF</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Your grade is: "</span>, <span class="var">grade</span>
<span class="kw-stop">STOP</span>`, 'Grade Calculator')}

      <div class="callout callout-warn">
        <strong>Don't forget END IF!</strong> Every IF block must be closed with END IF. Missing this is one of the most common mistakes.
      </div>
    `
  },

  /* 8 */ {
    icon: '🔁',
    title: 'FOR Loop',
    subtitle: 'Repeating steps a fixed number of times.',
    render: () => `
      ${tag('Iteration')}
      ${h('FOR Loop')}
      ${prose('A FOR loop is used when you know <strong>exactly how many times</strong> you want to repeat a block of code. It counts from a start value to an end value.')}

      ${code(`<span class="kw-loop">FOR</span> <span class="var">counter</span> <span class="arr">←</span> startValue <span class="kw">TO</span> endValue
  <span class="cmt">// code to repeat</span>
<span class="kw-loop">NEXT</span> <span class="var">counter</span>`, 'Syntax')}

      <div class="info-grid">
        ${icard('counter', 'The loop variable that counts')}
        ${icard('startValue', 'Where counting begins (usually 1)')}
        ${icard('endValue', 'Where counting stops (inclusive)')}
        ${icard('NEXT', 'Marks the end of the loop body')}
      </div>

      ${h('Example — Print 1 to 5')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">i</span> : <span class="kw">INTEGER</span>
<span class="kw-loop">FOR</span> <span class="var">i</span> <span class="arr">←</span> <span class="num">1</span> <span class="kw">TO</span> <span class="num">5</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"Number: "</span>, <span class="var">i</span>
<span class="kw-loop">NEXT</span> <span class="var">i</span>
<span class="kw-stop">STOP</span>`, 'Count 1-5')}

      ${h('Example — Sum of Numbers')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">i</span>, <span class="var">n</span>, <span class="var">total</span> : <span class="kw">INTEGER</span>
<span class="kw-io">OUTPUT</span> <span class="str">"How many numbers?"</span>
<span class="kw-io">INPUT</span> <span class="var">n</span>
<span class="var">total</span> <span class="arr">←</span> <span class="num">0</span>
<span class="kw-loop">FOR</span> <span class="var">i</span> <span class="arr">←</span> <span class="num">1</span> <span class="kw">TO</span> <span class="var">n</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"Enter number "</span>, <span class="var">i</span>
  <span class="kw-io">INPUT</span> <span class="var">num</span>
  <span class="var">total</span> <span class="arr">←</span> <span class="var">total</span> + <span class="var">num</span>
<span class="kw-loop">NEXT</span> <span class="var">i</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Total = "</span>, <span class="var">total</span>
<span class="kw-stop">STOP</span>`, 'Sum of Numbers')}

      ${h('Multiplication Tables Example')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">i</span>, <span class="var">n</span>, <span class="var">result</span> : <span class="kw">INTEGER</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter a number for its table"</span>
<span class="kw-io">INPUT</span> <span class="var">n</span>
<span class="kw-loop">FOR</span> <span class="var">i</span> <span class="arr">←</span> <span class="num">1</span> <span class="kw">TO</span> <span class="num">10</span>
  <span class="var">result</span> <span class="arr">←</span> <span class="var">n</span> * <span class="var">i</span>
  <span class="kw-io">OUTPUT</span> <span class="var">n</span>, <span class="str">" x "</span>, <span class="var">i</span>, <span class="str">" = "</span>, <span class="var">result</span>
<span class="kw-loop">NEXT</span> <span class="var">i</span>
<span class="kw-stop">STOP</span>`, 'Times Table')}
    `
  },

  /* 9 */ {
    icon: '🔄',
    title: 'WHILE Loop',
    subtitle: 'Repeating steps while a condition remains true.',
    render: () => `
      ${tag('Iteration')}
      ${h('WHILE Loop')}
      ${prose('A WHILE loop repeats a block of code <strong>as long as a condition is TRUE</strong>. Unlike a FOR loop, you use it when you do not know in advance how many times to repeat. The condition is checked <strong>before</strong> each repetition.')}

      ${code(`<span class="kw-loop">WHILE</span> condition <span class="kw-loop">DO</span>
  <span class="cmt">// code to repeat</span>
<span class="kw-loop">END WHILE</span>`, 'Syntax')}

      <div class="callout callout-warn">
        <strong>Infinite Loop Warning!</strong> Always make sure something inside the loop changes so the condition eventually becomes FALSE. If nothing changes, the loop runs forever.
      </div>

      ${h('Example — Input Validation')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">age</span> : <span class="kw">INTEGER</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Enter your age (must be positive)"</span>
<span class="kw-io">INPUT</span> <span class="var">age</span>
<span class="kw-loop">WHILE</span> <span class="var">age</span> &lt;= <span class="num">0</span> <span class="kw-loop">DO</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"Invalid! Enter a positive age"</span>
  <span class="kw-io">INPUT</span> <span class="var">age</span>
<span class="kw-loop">END WHILE</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Your age is: "</span>, <span class="var">age</span>
<span class="kw-stop">STOP</span>`, 'Validation')}

      ${h('Example — Count Down')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">count</span> : <span class="kw">INTEGER</span>
<span class="var">count</span> <span class="arr">←</span> <span class="num">10</span>
<span class="kw-loop">WHILE</span> <span class="var">count</span> &gt; <span class="num">0</span> <span class="kw-loop">DO</span>
  <span class="kw-io">OUTPUT</span> <span class="var">count</span>
  <span class="var">count</span> <span class="arr">←</span> <span class="var">count</span> - <span class="num">1</span>
<span class="kw-loop">END WHILE</span>
<span class="kw-io">OUTPUT</span> <span class="str">"Blast off!"</span>
<span class="kw-stop">STOP</span>`, 'Count Down')}

      ${h('FOR vs WHILE — Which to Use?')}
      <div class="info-grid">
        ${icard('Use FOR when', 'You know the number of repeats in advance')}
        ${icard('Use WHILE when', 'You repeat until some event or condition is met')}
      </div>
    `
  },

  /* 10 */ {
    icon: '🗂️',
    title: 'Arrays',
    subtitle: 'Storing multiple values under one variable name.',
    render: () => `
      ${tag('Arrays')}
      ${h('What is an Array?')}
      ${prose('An array stores <strong>multiple values of the same type</strong> under a single variable name. Each value is accessed using an <strong>index number</strong> (starting at 1 in WSU pseudocode).')}

      ${h('Declaring an Array')}
      ${code(`<span class="kw">DECLARE</span> <span class="var">arrayName</span>[size] : <span class="kw">DATATYPE</span>

<span class="cmt">// Examples:</span>
<span class="kw">DECLARE</span> <span class="var">marks</span>[<span class="num">5</span>] : <span class="kw">INTEGER</span>       <span class="cmt">// holds 5 integers</span>
<span class="kw">DECLARE</span> <span class="var">names</span>[<span class="num">10</span>] : <span class="kw">STRING</span>       <span class="cmt">// holds 10 strings</span>`, 'Declaration')}

      ${h('Accessing Array Elements')}
      ${code(`<span class="var">marks</span>[<span class="num">1</span>] <span class="arr">←</span> <span class="num">85</span>           <span class="cmt">// store 85 in position 1</span>
<span class="var">marks</span>[<span class="num">2</span>] <span class="arr">←</span> <span class="num">72</span>           <span class="cmt">// store 72 in position 2</span>
<span class="kw-io">OUTPUT</span> <span class="var">marks</span>[<span class="num">1</span>]          <span class="cmt">// displays 85</span>`, 'Access')}

      ${h('Using Arrays with Loops')}
      ${code(`<span class="kw">START</span>
<span class="kw">DECLARE</span> <span class="var">scores</span>[<span class="num">5</span>] : <span class="kw">INTEGER</span>
<span class="kw">DECLARE</span> <span class="var">i</span>, <span class="var">total</span> : <span class="kw">INTEGER</span>
<span class="var">total</span> <span class="arr">←</span> <span class="num">0</span>

<span class="cmt">// Input 5 scores</span>
<span class="kw-loop">FOR</span> <span class="var">i</span> <span class="arr">←</span> <span class="num">1</span> <span class="kw">TO</span> <span class="num">5</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"Enter score "</span>, <span class="var">i</span>
  <span class="kw-io">INPUT</span> <span class="var">scores</span>[<span class="var">i</span>]
  <span class="var">total</span> <span class="arr">←</span> <span class="var">total</span> + <span class="var">scores</span>[<span class="var">i</span>]
<span class="kw-loop">NEXT</span> <span class="var">i</span>

<span class="cmt">// Display all scores</span>
<span class="kw-loop">FOR</span> <span class="var">i</span> <span class="arr">←</span> <span class="num">1</span> <span class="kw">TO</span> <span class="num">5</span>
  <span class="kw-io">OUTPUT</span> <span class="str">"Score "</span>, <span class="var">i</span>, <span class="str">" = "</span>, <span class="var">scores</span>[<span class="var">i</span>]
<span class="kw-loop">NEXT</span> <span class="var">i</span>

<span class="kw-io">OUTPUT</span> <span class="str">"Total = "</span>, <span class="var">total</span>
<span class="kw-stop">STOP</span>`, 'Array with Loop')}

      <div class="callout">
        <strong>Remember:</strong> In WSU pseudocode, array indices start at <strong>1</strong>, not 0.
      </div>
    `
  },
];

/* ── QUIZ DATA ── */
const questions = [
  {
    type: 'mcq',
    text: 'What keyword is used to start every pseudocode program?',
    options: ['BEGIN', 'START', 'OPEN', 'RUN'],
    answer: 1,
    explanation: 'Every WSU pseudocode program must begin with the keyword START.'
  },
  {
    type: 'mcq',
    text: 'Which keyword is used to end a pseudocode program?',
    options: ['END', 'FINISH', 'STOP', 'QUIT'],
    answer: 2,
    explanation: 'Every WSU pseudocode program must end with STOP.'
  },
  {
    type: 'mcq',
    text: 'What data type would you use to store the value 3.14?',
    options: ['INTEGER', 'STRING', 'BOOLEAN', 'REAL'],
    answer: 3,
    explanation: 'REAL is used for numbers with decimal points. INTEGER only holds whole numbers.'
  },
  {
    type: 'mcq',
    text: 'Which of the following correctly declares two variables in WSU pseudocode?',
    options: [
      'DECLARE num1 AND num2 AS REAL',
      'DECLARE num1 : REAL, num2 : REAL',
      'DECLARE num1, num2 : REAL',
      'DIM num1, num2 AS REAL'
    ],
    answer: 2,
    explanation: 'The correct WSU syntax groups them as: DECLARE num1, num2 : REAL'
  },
  {
    type: 'mcq',
    text: 'At WSU, which keyword is used to get input from the user?',
    options: ['READ', 'GET', 'SCAN', 'INPUT'],
    answer: 3,
    explanation: 'WSU uses INPUT (not READ or GET). Using the wrong keyword loses marks.'
  },
  {
    type: 'mcq',
    text: 'At WSU, which keyword displays a result on screen?',
    options: ['PRINT', 'WRITE', 'OUTPUT', 'DISPLAY'],
    answer: 2,
    explanation: 'WSU uses OUTPUT (not WRITE or PRINT).'
  },
  {
    type: 'mcq',
    text: 'What is the assignment operator in WSU pseudocode?',
    options: ['=', ':=', '==', '←'],
    answer: 3,
    explanation: 'The arrow ← is the assignment operator. It means "gets the value of".'
  },
  {
    type: 'mcq',
    text: 'What will this produce?\n\nnum1 ← 10\nnum2 ← 4\nresult ← num1 MOD num2\nOUTPUT result',
    options: ['2.5', '2', '40', '6'],
    answer: 1,
    explanation: 'MOD gives the remainder of division. 10 ÷ 4 = 2 remainder 2. So 10 MOD 4 = 2.'
  },
  {
    type: 'mcq',
    text: 'Which loop structure do you use when you know EXACTLY how many times to repeat?',
    options: ['WHILE loop', 'FOR loop', 'IF statement', 'REPEAT loop'],
    answer: 1,
    explanation: 'A FOR loop is used when the number of repetitions is known in advance.'
  },
  {
    type: 'mcq',
    text: 'What keyword closes a FOR loop in WSU pseudocode?',
    options: ['END FOR', 'END LOOP', 'NEXT counter', 'LOOP END'],
    answer: 2,
    explanation: 'A FOR loop is closed with NEXT followed by the counter variable name.'
  },
  {
    type: 'mcq',
    text: 'What keyword closes a WHILE loop?',
    options: ['WEND', 'END WHILE', 'NEXT', 'LOOP'],
    answer: 1,
    explanation: 'A WHILE loop is closed with END WHILE.'
  },
  {
    type: 'mcq',
    text: 'What keyword closes an IF block?',
    options: ['ENDIF', 'END', 'END IF', 'FI'],
    answer: 2,
    explanation: 'An IF block is closed with END IF (two words with a space).'
  },
  {
    type: 'fill',
    text: 'Complete the DECLARE statement to declare two variables called "length" and "width" as REAL numbers:',
    prefix: 'DECLARE ',
    answer: 'length, width : REAL',
    acceptableAnswers: ['length, width : real', 'length,width : REAL', 'length,width:REAL', 'length, width:REAL', 'length , width : REAL'],
    explanation: 'Correct: DECLARE length, width : REAL — group same-type variables on one line with colon before the type.'
  },
  {
    type: 'fill',
    text: 'Write the assignment statement that calculates the area (length × width) and stores it in a variable called "area":',
    prefix: '',
    answer: 'area ← length * width',
    acceptableAnswers: ['area ← length * width', 'area← length * width', 'area ←length * width', 'area←length*width', 'area ← length*width'],
    explanation: 'Correct: area ← length * width. The variable receives the result on the left, the expression is on the right.'
  },
  {
    type: 'fill',
    text: 'Write the OUTPUT statement that displays the label "Result = " followed by the value of a variable called "result":',
    prefix: '',
    answer: 'OUTPUT "Result = ", result',
    acceptableAnswers: ['output "result = ", result', 'OUTPUT "Result = ",result', 'OUTPUT "Result = " result'],
    explanation: 'Correct: OUTPUT "Result = ", result — string in quotes, then comma, then variable name.'
  },
  {
    type: 'pseudo',
    text: 'Write pseudocode that asks the user for their age, then outputs "Adult" if the age is 18 or more, otherwise outputs "Minor".',
    mustContain: ['START','DECLARE','INPUT','OUTPUT','IF','THEN','ELSE','END IF','STOP'],
    mustContainSome: [['>=','≥','=> 18','18 OR MORE']],
    explanation: `START
DECLARE age : INTEGER
OUTPUT "Enter your age"
INPUT age
IF age >= 18 THEN
  OUTPUT "Adult"
ELSE
  OUTPUT "Minor"
END IF
STOP`
  },
  {
    type: 'pseudo',
    text: 'Write pseudocode that asks the user for two numbers, calculates their sum and product, and outputs both results.',
    mustContain: ['START','DECLARE','INPUT','OUTPUT','STOP'],
    mustContainSome: [['+','sum','addition'],['*','product','multiplication']],
    explanation: `START
DECLARE num1, num2 : REAL
DECLARE sum, product : REAL
OUTPUT "Enter first number"
INPUT num1
OUTPUT "Enter second number"
INPUT num2
sum ← num1 + num2
product ← num1 * num2
OUTPUT "Sum = ", sum
OUTPUT "Product = ", product
STOP`
  },
  {
    type: 'pseudo',
    text: 'Write pseudocode that uses a FOR loop to display the numbers 1 to 10.',
    mustContain: ['START','DECLARE','FOR','TO','NEXT','OUTPUT','STOP'],
    mustContainSome: [['1','TO 10','to 10']],
    explanation: `START
DECLARE i : INTEGER
FOR i ← 1 TO 10
  OUTPUT i
NEXT i
STOP`
  },
  {
    type: 'mcq',
    text: 'Look at this pseudocode:\n\ncount ← 0\nWHILE count < 5 DO\n  OUTPUT count\n  count ← count + 1\nEND WHILE\n\nHow many times will OUTPUT run?',
    options: ['4', '5', '6', 'Infinite times'],
    answer: 1,
    explanation: 'count goes: 0,1,2,3,4 — that is 5 outputs. When count reaches 5, the condition (5 < 5) is FALSE so the loop stops.'
  },
  {
    type: 'mcq',
    text: 'Which of the following is the CORRECT way to declare an array of 10 integers called "scores" in WSU pseudocode?',
    options: [
      'DECLARE scores AS ARRAY[10] OF INTEGER',
      'DECLARE scores[10] : INTEGER',
      'ARRAY scores[10] : INTEGER',
      'DIM scores(10) AS INTEGER'
    ],
    answer: 1,
    explanation: 'The correct WSU syntax is: DECLARE scores[10] : INTEGER'
  },
];

/* ── HELPERS ── */
const tag   = (t)  => `<div class="lesson-tag">${t}</div>`;
const h     = (t)  => `<div class="block-heading">${t}</div>`;
const prose = (t)  => `<p class="prose" style="margin-bottom:1rem;">${t}</p>`;
const code  = (c, label='') => `<div class="code-block">${label ? `<span class="cb-label">${label}</span>` : ''}${c}</div>`;
const icard = (label, desc) => `<div class="info-card"><div class="info-card-label">${label}</div><div class="info-card-desc">${desc}</div></div>`;

/* ── RENDER ENGINE ── */
function showWelcome() {
  currentLesson = -1;
  updateNav();
  document.getElementById('mainContent').innerHTML = `
    <div class="welcome-hero fade-up">
      <div class="welcome-badge">WSU · Diploma ICT · CNET Dev 1</div>
      <h1 class="welcome-title">Master<br><span>Pseudocode.</span></h1>
      <p class="welcome-desc">
        An interactive guide to writing pseudocode in the Walter Sisulu University style. 
        Work through the lessons in order, then test yourself with the quiz.
      </p>
      <div class="welcome-grid">
        <div class="welcome-stat">
          <div class="welcome-stat-num">${lessons.length}</div>
          <div class="welcome-stat-label">Lessons to complete</div>
        </div>
        <div class="welcome-stat">
          <div class="welcome-stat-num">${questions.length}</div>
          <div class="welcome-stat-label">Practice questions</div>
        </div>
        <div class="welcome-stat">
          <div class="welcome-stat-num">5</div>
          <div class="welcome-stat-label">Question types</div>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showLesson(0)">Start Learning &rarr;</button>
    </div>
  `;
}

function showLesson(idx) {
  currentLesson = idx;
  visitedLessons.add(idx);
  updateNav();
  updateProgress();

  const l = lessons[idx];
  const hasPrev = idx > 0;
  const hasNext = idx < lessons.length - 1;

  document.getElementById('mainContent').innerHTML = `
    <div class="lesson-header fade-up">
      ${l.render()}
      <div class="lesson-nav-btns">
        ${hasPrev ? `<button class="btn btn-secondary" onclick="showLesson(${idx-1})">&larr; Previous</button>` : ''}
        ${hasNext ? `<button class="btn btn-primary" onclick="showLesson(${idx+1})">Next &rarr;</button>`
                  : `<button class="btn btn-primary" onclick="showQuiz()">Take the Quiz &rarr;</button>`}
      </div>
    </div>
  `;
  document.getElementById('mainContent').scrollTop = 0;
  window.scrollTo(0, 0);
}

/* ── QUIZ ── */
let quizAnswers    = {};
let quizSubmitted  = false;
let quizScore      = 0;

function showQuiz() {
  currentLesson = 'quiz';
  updateNav();
  quizAnswers   = {};
  quizSubmitted = false;
  quizScore     = 0;

  const qs = questions.map((q, i) => renderQuestion(q, i)).join('');

  document.getElementById('mainContent').innerHTML = `
    <div class="quiz-header fade-up">
      <div class="lesson-tag">Practice</div>
      <h1 class="quiz-title">Pseudocode Quiz</h1>
      <p class="quiz-meta">${questions.length} questions &middot; Multiple choice, fill-in-the-blank &amp; write your own pseudocode</p>
    </div>
    ${qs}
    <div class="quiz-submit-area">
      <button class="btn btn-primary" id="submitBtn" onclick="submitQuiz()">Submit All Answers</button>
      <button class="btn btn-secondary" onclick="showWelcome()">Back to Home</button>
    </div>
  `;
  window.scrollTo(0, 0);
}

function renderQuestion(q, i) {
  const num = `<div class="q-number">Question ${i+1} of ${questions.length}</div>`;

  if (q.type === 'mcq') {
    const codeSnippet = q.text.includes('\n')
      ? `<div class="q-code">${escHtml(q.text.split('\n').slice(1).join('\n'))}</div>`
      : '';
    const qText = q.text.includes('\n') ? q.text.split('\n')[0] : q.text;

    const opts = q.options.map((o, oi) =>
      `<button class="option-btn" id="q${i}opt${oi}" onclick="selectOption(${i},${oi})">
        <span class="opt-letter">${'ABCD'[oi]}</span> ${escHtml(o)}
      </button>`
    ).join('');

    return `
      <div class="question-card" id="qcard${i}">
        ${num}
        <div class="q-text">${escHtml(qText)}</div>
        ${codeSnippet}
        <div class="options-grid">${opts}</div>
        <div class="feedback" id="fb${i}"></div>
      </div>`;
  }

  if (q.type === 'fill') {
    return `
      <div class="question-card" id="qcard${i}">
        ${num}
        <div class="q-text">${escHtml(q.text)}</div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          ${q.prefix ? `<span style="font-family:'JetBrains Mono',monospace;font-size:.85rem;color:var(--blue);">${escHtml(q.prefix)}</span>` : ''}
          <input class="fill-input" id="q${i}input" placeholder="type your answer here..." style="flex:1;min-width:200px;" />
        </div>
        <button class="check-btn" onclick="checkFill(${i})">Check Answer</button>
        <div class="feedback" id="fb${i}"></div>
      </div>`;
  }

  if (q.type === 'pseudo') {
    return `
      <div class="question-card" id="qcard${i}">
        ${num}
        <div class="q-text">${escHtml(q.text)}</div>
        <textarea class="pseudo-textarea" id="q${i}input" placeholder="Write your pseudocode here...&#10;START&#10;...&#10;STOP"></textarea>
        <button class="check-btn" onclick="checkPseudo(${i})">Check My Pseudocode</button>
        <div class="feedback" id="fb${i}"></div>
      </div>`;
  }

  return '';
}

function selectOption(qi, oi) {
  if (quizSubmitted) return;
  quizAnswers[qi] = oi;
  const opts = document.querySelectorAll(`[id^="q${qi}opt"]`);
  opts.forEach((el, i) => { el.classList.toggle('selected', i === oi); });
}

function checkFill(qi) {
  const q   = questions[qi];
  const inp = document.getElementById(`q${qi}input`);
  const val = inp.value.trim();
  if (!val) return;

  const norm = (s) => s.toLowerCase().replace(/\s+/g,' ').trim();
  const correct = norm(val) === norm(q.answer)
    || (q.acceptableAnswers && q.acceptableAnswers.some(a => norm(val) === norm(a)));

  inp.className = 'fill-input ' + (correct ? 'inp-correct' : 'inp-wrong');
  inp.disabled  = true;
  quizAnswers[qi] = correct ? 'correct' : 'wrong';
  showFeedback(qi, correct, q.explanation, q.answer);
  document.querySelector(`#q${qi}input`).closest('.question-card').className =
    'question-card ' + (correct ? 'correct' : 'incorrect');
}

function checkPseudo(qi) {
  const q   = questions[qi];
  const inp = document.getElementById(`q${qi}input`);
  const val = inp.value.toUpperCase();
  if (!val.trim()) return;

  const missing = q.mustContain.filter(kw => !val.includes(kw.toUpperCase()));
  const someOk  = q.mustContainSome
    ? q.mustContainSome.every(group => group.some(kw => val.includes(kw.toUpperCase())))
    : true;

  const correct = missing.length === 0 && someOk;

  inp.disabled = true;
  quizAnswers[qi] = correct ? 'correct' : 'wrong';

  let expText = correct
    ? '✓ Great work! Your pseudocode contains all the required keywords and logic.'
    : `✗ Missing or incorrect elements.<br>` +
      (missing.length ? `Missing keywords: <strong>${missing.join(', ')}</strong><br>` : '') +
      `<br><strong>Model answer:</strong><br><pre style="margin-top:6px;font-family:'JetBrains Mono',monospace;font-size:.78rem;white-space:pre-wrap;">${escHtml(q.explanation)}</pre>`;

  showFeedback(qi, correct, expText);
  document.querySelector(`#q${qi}input`).closest('.question-card').className =
    'question-card ' + (correct ? 'correct' : 'incorrect');
}

function showFeedback(qi, correct, explanation, answer) {
  const fb = document.getElementById(`fb${qi}`);
  fb.className = `feedback show ${correct ? 'fb-correct' : 'fb-wrong'}`;

  let html = correct
    ? `<strong>✓ Correct!</strong> ${explanation}`
    : `<strong>✗ Incorrect.</strong> ${explanation}`;

  if (!correct && answer) html += `<br><br>Expected: <code style="font-family:'JetBrains Mono',monospace;">${escHtml(answer)}</code>`;
  fb.innerHTML = html;
}

function submitQuiz() {
  if (quizSubmitted) return;
  quizSubmitted = true;

  // Auto-mark remaining MCQs
  let score = 0;
  questions.forEach((q, i) => {
    if (q.type === 'mcq') {
      const chosen = quizAnswers[i];
      const opts   = document.querySelectorAll(`[id^="q${i}opt"]`);
      opts.forEach((el) => el.disabled = true);

      if (chosen === undefined) {
        // unanswered
        opts[q.answer].classList.add('opt-correct');
        quizAnswers[i] = 'skipped';
        showFeedback(i, false, q.explanation);
        document.getElementById(`qcard${i}`).className = 'question-card incorrect';
      } else if (chosen === q.answer) {
        opts[chosen].classList.add('opt-correct');
        score++;
        quizAnswers[i] = 'correct';
        showFeedback(i, true, q.explanation);
        document.getElementById(`qcard${i}`).className = 'question-card correct';
      } else {
        opts[chosen].classList.add('opt-wrong');
        opts[q.answer].classList.add('opt-correct');
        showFeedback(i, false, q.explanation);
        document.getElementById(`qcard${i}`).className = 'question-card incorrect';
      }
    } else {
      if (quizAnswers[i] === 'correct') score++;
    }
  });

  quizScore = score;
  const pct  = Math.round((score / questions.length) * 100);
  const grade = pct >= 75 ? {label:'Distinction 🏆', color:'var(--accent)', bg:'var(--accent-glow)'}
              : pct >= 60 ? {label:'Merit 🥈', color:'var(--blue)', bg:'rgba(79,195,247,0.1)'}
              : pct >= 50 ? {label:'Pass 🎓', color:'var(--yellow)', bg:'rgba(255,209,102,0.1)'}
              :             {label:'Keep Studying 📚', color:'var(--red)', bg:'rgba(255,107,107,0.1)'};

  const resultHtml = `
    <div class="score-card">
      <div class="score-num">${pct}%</div>
      <div class="score-label">${score} out of ${questions.length} correct</div>
      <div class="score-grade" style="background:${grade.bg};color:${grade.color};">${grade.label}</div>
      <p style="font-size:.82rem;color:var(--text-secondary);">
        ${pct >= 50
          ? 'Well done! Review the questions you missed and try again.'
          : 'Go back through the lessons and try the quiz again. You\'ve got this!'}
      </p>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:1.5rem;">
        <button class="btn btn-primary" onclick="showQuiz()">Retake Quiz</button>
        <button class="btn btn-secondary" onclick="showLesson(0)">Review Lessons</button>
      </div>
    </div>
  `;

  const submitArea = document.querySelector('.quiz-submit-area');
  submitArea.insertAdjacentHTML('beforebegin', resultHtml);
  submitArea.innerHTML = '';
  submitArea.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ── SIDEBAR NAV ── */
function buildNav() {
  const nav = document.getElementById('lessonNav');
  const icons = ['📖','🚀','📦','⌨️','↙','🔢','🤔','🔀','🔁','🔄','🗂️'];
  nav.innerHTML = lessons.map((l, i) =>
    `<button class="nav-btn" id="navbtn${i}" onclick="showLesson(${i})">
      <span class="nav-icon">${icons[i]}</span>
      <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${l.title}</span>
    </button>`
  ).join('');
}

function updateNav() {
  lessons.forEach((_, i) => {
    const btn = document.getElementById(`navbtn${i}`);
    if (!btn) return;
    btn.classList.toggle('active', currentLesson === i);
    btn.classList.toggle('done', visitedLessons.has(i) && currentLesson !== i);
  });
  document.querySelector('#quizNav .nav-btn')
    ?.classList.toggle('active', currentLesson === 'quiz');
}

function updateProgress() {
  const n    = visitedLessons.size;
  const tot  = lessons.length;
  const pct  = Math.round((n / tot) * 100);
  document.getElementById('progressText').textContent = `${n} / ${tot}`;
  document.getElementById('progressFill').style.width  = pct + '%';
}

/* ── UTIL ── */
function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* ── INIT ── */
buildNav();
showWelcome();
