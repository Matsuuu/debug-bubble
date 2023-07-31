import { html } from "lit"
import { onNavigation } from "suunta";

export const HomeView = () => {

    onNavigation(() => {
        window.addEventListener("keydown", e => {
            console.log("Pressed button ", e.key)
        })
    })

    return html`
        <h2>Hello world!</h2>
        <a href="/foo">Foo</a>
    `;
}
