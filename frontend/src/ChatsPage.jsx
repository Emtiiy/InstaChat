import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='a3aae01d-0e77-4ea0-ad27-1f588983f43f'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
                />
        </div>
     )
}

export default ChatsPage