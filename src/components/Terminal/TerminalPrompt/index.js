import React, { Component } from 'react';
import { toggleDarkTheme } from '../../../actions';
import { connect } from "react-redux";
import './style.css';
import fun from 'funcy';

const $ = fun.parameter;
const _ = fun.wildcard;

const math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y }
};

const commands = {
    "echo": "Prints proceeding string to the terminal.",
    "email": "Link to my email.",
    "github": "Link to my github.",
    "help": "Show this help menu.",
    "linkedin": "Link to my linkedin.",
    "resume": "View my resume.",
    "toggle-theme": "Toggle the theme between light and dark.",
    "&&": "You can run multiple commands with the && operator."
};

class TerminalPrompt extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = {
            output: ["type \"help\" for a list of commands"],
            input: '',
            history: [],
            historyPointer: -1
        };

        this.match = fun(
            [/\s+(.*)\s+/, (str) => this.match(str.trim())],
            [Number, (n) => n],
            // WIP Math Lmao
            /*[/((\d*)\s*([-+*])\s*(\d*))/, (str) => {
                var matches = [];
                str.replace(/(\d*)\s*([-+*])\s*(\d*){1}/g, function(match, x, op, y) {
                    matches.push({
                        x, op, y
                    });
                });

                //matches = sortObj(matches);

                var total = 0;
                for (var i in matches) {
                    if(!matches[i].x) {
                        total = math_it_up[matches[i].op](total, Number(matches[i].y))
                    } else {
                        total = math_it_up[matches[i].op](Number(matches[i].x), Number(matches[i].y))
                    }
                }
                return total;
            }],*/
            [/^help$/, () => {
                var maxLength = 0;
                var result = []
                for (var key in commands) {
                    if(key.length > maxLength)
                        maxLength = key.length
                }
                for (key in commands) {
                    if (commands.hasOwnProperty(key)) {
                        let spaces = Array.apply(null, { length: maxLength - key.length }).map((_, i) => (
                            <span key={"space-"+i}>&nbsp;</span>
                        ));
                        result = result.concat(<span>{key + ": "} {spaces} {commands[key]}</span>);
                    }
                }
                return result;
            }],
            [/^echo/, (str) => str.replace("echo ", '')],
            [/toggle-theme/, () => {
                this.props.toggleDarkTheme();
                return "Theme toggled.";
            }],
            [/^resume$/, () => {
                setTimeout(() => {
                    document.getElementById('resume').scrollIntoView({behavior: 'smooth', block: 'start'});
                }, 100);
                return "Scrolling to resume.";
            }],
            [/^linkedin$/, () => <a href="https://www.linkedin.com/in/kyle-yohler-a41066138/" target="_blank" rel="noopener noreferrer">Kyle's Linkedin</a>],
            [/^email$/, () => <a href="mailto:yohlerkyle@gmail.com" target="_blank" rel="noopener noreferrer">Kyle's Email</a>],
            [/^github$/, () => <a href="https://github.com/Yohlo" target="_blank" rel="noopener noreferrer">Kyle's GitHub</a>],
            [/^clear$/, () => { 
                this.setState({ output: ["type \"help\" for a list of commands"] });
                return;
            }],
            [/^(\s*)$/, () => { return; }],
            [/^rm -rf \/$/, () => document.documentElement.innerHTML=""], // A little easter egg :)
            [String, (str) => str + ": Command not found. \ntype \"help\" for a list of commands"]
        );

    }

    handleInput(input) {
        var joined = this.state.output.concat(" λ " + input);

        var inputs = input.split(" && "); 

        for(var i in inputs) {
            joined = joined.concat(this.match(inputs[i]));
        }

        this.setState({
            output: joined,
            history: input ? [input].concat(this.state.history): this.state.history,
            historyPointer: input ? -1 : this.state.historyPointer
        });
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleKeyPress(e) {
        if(e.key === 'Enter') {
            this.handleInput(e.target.value);
            this.setState({
                input: ''
            })

            e.target.focus();

            setTimeout(() => {
                if (this.textRef !== null) {
                  this.textRef.scrollTop = this.state.output.length * 15 + this.inputRef.height;
                }
            }, 50);
        }
    }

    // For detecting arrow keys
    handleKeyDown(e) {
        switch(e.key) {
            case 'ArrowUp':
                if(this.state.historyPointer >= -1 && this.state.historyPointer < this.state.history.length) {
                    this.setState({
                        input: this.state.historyPointer === this.state.history.length - 1 ? this.state.input : this.state.history[this.state.historyPointer + 1],
                        historyPointer: this.state.historyPointer === this.state.history.length - 1 ? this.state.historyPointer : this.state.historyPointer + 1
                    })
                    if (e.setSelectionRange) {
                        e.focus();
                        e.setSelectionRange(this.state.input.length, this.state.input.length); // TODO : Figure out why this doesn't work
                    }
                }
                break;
            case 'ArrowDown': // down
                if(this.state.historyPointer > -1 && this.state.historyPointer < this.state.history.length) {
                    this.setState({
                        input: this.state.historyPointer === 0 ? "" : this.state.history[this.state.historyPointer - 1],
                        historyPointer: this.state.historyPointer - 1
                    })
                    if (e.setSelectionRange) {
                        e.focus();
                        e.setSelectionRange(this.state.input.length, this.state.input.length);
                    }
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div onClick={() => this.inputRef.focus()} ref={(ref) => this.textRef = ref} id="terminal-text" className="info-text">
                    {
                        this.state.output.map((item, i) => (
                            <p key={"text-" + i}>{item}</p>
                        ))
                    }
                    <p>
                        <span className="info-carret">&lambda;&nbsp;</span>
                        <input 
                            ref={(ref) => this.inputRef = ref}
                            id="terminal-input"
                            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
                            type="text" 
                            value={this.state.input || ""}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                            onKeyPress={this.handleKeyPress} />
                    </p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    ...props,
    toggleDarkTheme: () => dispatch(toggleDarkTheme())
});

export default connect(
    null,
    mapDispatchToProps
)(TerminalPrompt);