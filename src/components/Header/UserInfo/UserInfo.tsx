import { About } from "./About"
import { Location } from "./About/Location"
import { Avatar } from "./Avatar"
import { Skills } from "./Skills"

export const UserInfo = () => {
    return (
        <div>
            <Avatar />
            <About />
            <Location />
            <Skills />
        </div>
    )
}