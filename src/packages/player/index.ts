import { App } from 'vue'
import Player from './index.vue'

Player.name = 'c-player'

Player.install = (app: App) => {
    app.component(Player.name, Player)
}

export default Player