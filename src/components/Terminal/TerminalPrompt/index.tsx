import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from '../../../contexts';
import { useLocalStorage } from '../../../hooks';
import fun from 'funcy';
import './styles.css';

interface Command {
    name: string;
    helpText: string;
}

const commands: Command[] = [
    { name: "echo", helpText: "Prints proceeding string to the terminal." },
    { name: "email", helpText: "Link to my email." },
    { name: "github", helpText:  "Link to my github." },
    { name: "help", helpText:  "Show this help menu." },
    { name: "linkedin", helpText:  "Link to my linkedIn." },
    { name: "resume", helpText:  "View my resume." },
    { name: "toggle-theme", helpText:  "Toggle the theme between light and dark." },
    { name: "&&", helpText:  "You can run multiple commands with the && operator." }
];

const defaultOutput = ["type \"help\" for a list of commands"];

const TerminalPrompt: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    const [output, setOutput] = useState<string[]>(defaultOutput);
    const [input, setInput] = useState<string>('');
    const [history, setHistory] = useLocalStorage<string[]>('terminalHistory', []);
    const [historyPointer, setHistoryPointer] = useState<number>(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const match = fun(
        [/^\s+(.*)\s+$/, (str: string) => match(str.trim())],
        [Number, (n: number) => n],
        [/^help$/, () => {
            var maxLength = 0;
            var result: any[] = [];

            commands.map(command => {
                maxLength = Math.max(command.name.length, maxLength);
                return maxLength;
            });
            commands.map(command => {
                let spaces = [];
                for (var i = 0; i <= maxLength - command.name.length; i++) {
                    spaces.push(<span key={`space-${i}`}>&nbsp;</span>);
                }
                result = result.concat(<span>{`${command.name}:`} {spaces} {`${command.helpText}`}</span>);
                return result;
            });
            return result;
        }],
        [/^echo/, (str: string) => str.replace("echo", '').trim()],
        [/toggle-theme/, () => {
            themeContext.toggleTheme();
            return "Theme toggled.";
        }],
        [/^resume$/, () => {
            setTimeout(() => {
                document.getElementById('resume')?.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100);
            return "Scrolling to resume.";
        }],
        [/^linkedin$/, () => <a href="https://www.linkedin.com/in/kyle-yohler-a41066138/" target="_blank" rel="noopener noreferrer">Kyle's LinkedIn</a>],
        [/^email$/, () => <a href="mailto:yohlerkyle@gmail.com" target="_blank" rel="noopener noreferrer">Kyle's Email</a>],
        [/^github$/, () => <a href="https://github.com/Yohlo" target="_blank" rel="noopener noreferrer">Kyle's GitHub</a>],
        [/^(\s*)$/, () => { return; }],
        [/^rm -rf \/$/, () => document.documentElement.innerHTML=""], // A little easter egg :)
        [String, (str: string) => str + ": Command not found. \ntype \"help\" for a list of commands"]
    );

    const handleInput = (input: string) => {
        if (!input) { return; }
        let joined = output.concat(` λ ${input}`);
        input.split(' && ').map(input => joined = input === 'clear' ? defaultOutput : joined.concat(match(input)));

        setOutput(joined);
        setHistory([input].concat(history));
        setHistoryPointer(-1);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if(e.key === 'Enter') {
            handleInput(target.value);
            setInput('');
        }

        target.focus();

        setTimeout(() => {
            const inputNode = inputRef.current;
            const textNode  = textRef.current;
            if(inputNode && textNode) {
                textNode.scrollTop = output.length * 15 + inputNode.height;
            }
        }, 50);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputNode = inputRef.current;
        switch(e.key) {
            case 'ArrowUp':
                if(historyPointer >= -1 && historyPointer < history.length) {
                    if(historyPointer !== history.length - 1) {
                        setInput(history[historyPointer + 1]);
                        setHistoryPointer(historyPointer + 1)
                    }
                    if(inputNode) {
                        inputNode.focus();
                        inputNode.setSelectionRange(input.length, input.length);
                    }
                }
                break;
            case 'ArrowDown': // down
                if(historyPointer > -1 && historyPointer < history.length) {
                    setInput(historyPointer === 0 ? '' : history[historyPointer - 1]);
                    setHistoryPointer(pointer => pointer -1);
                    if(inputNode) {
                        inputNode.focus();
                        inputNode.setSelectionRange(input.length, input.length);
                    }
                }
                break;
            default:
                break;
        }
    }

    return (
        <div onClick={() => inputRef.current?.focus()} ref={textRef} id="terminal-text" className="info-text">
                {
                    output.map((item, i) => (
                        <p key={"text-" + i}>{item}</p>
                    ))
                }
                <p>
                    <span className="info-carrot">&lambda;&nbsp;</span>
                    <input 
                        ref={inputRef}
                        id="terminal-input"
                        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
                        type="text" 
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onKeyPress={handleKeyPress} />
                </p>
        </div>
    );
}

export default TerminalPrompt;
