import '@picocss/pico/css/pico.css'
import './app.css'
import './minimal-theme-switcher.js'
import {Twitch, Youtube} from "react-feather"

import socials from './data/socials.json'

export function App() {
    const commands = {
        "commands": {
            "name": "commands",
            "platform": [
                "youtube",
                "twitch"
            ],
            "permissions": "everyone",
            "Response": "You can find a list of commands at https://michael-brooks.github.io/stream-commands/"
        }
    }

    return (
        <>
            <header class="container">
                <hgroup>
                    <h1>Channel commands</h1>
                    <h2>A list of chat commands enabled in chat.</h2>
                </hgroup>
                <nav>
                    <ul>
                        <li>
                            <details role="list">
                                <summary aria-haspopup="listbox" role="button" class="secondary">Theme</summary>
                                <ul role="listbox">
                                    <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                                    <li><a href="#" data-theme-switcher="light">Light</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="container">
                <section id="tables">
                    <h2>Streaming Plaforms</h2>

                    <h3>
                        {Object.keys(socials).map((platform, index) =>
                            <a href={socials[platform]} class="streaming_platform">
                                {platform === 'youtube' && <Youtube size={50} /> }
                                {platform === 'twitch' && <Twitch size={50} /> }
                            </a>
                        )}
                    </h3>
                    <figure>
                        <table role="grid">
                            <thead>
                            <tr>
                                <th scope="col">Platform</th>
                                <th scope="col">Command</th>
                                <th scope="col">Permissions</th>
                                <th scope="col">Response</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><Youtube size={25}/> <Twitch size={25}/></th>
                                <td>!commands</td>
                                <td>Everyone</td>
                                <td>You can find a list of commands at
                                    https://michael-brooks.github.io/stream-commands/
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><Youtube size={25}/></th>
                                <td>!twitch</td>
                                <td>Everyone</td>
                                <td>You can watch the livestream on Twitch - https://www.twitch.tv/michaelbrooksuk</td>
                            </tr>
                            <tr>
                                <th scope="row"><Youtube size={25}/> <Twitch size={25}/></th>
                                <td>!bonk</td>
                                <td>Everyone</td>
                                <td>Sender bonks @user</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            </tbody>
                        </table>
                    </figure>
                </section>
            </main>

            <footer class="container">
                <small
                >Built with <a href="https://picocss.com">Pico</a> •
                    <a href="https://github.com/picocss/examples/blob/master/v1-basic-template/"
                    >Source code</a
                    ></small
                >
            </footer>
        </>
    )
}