export default function ChatMessage({ name, message }) {
    return (
        <div className="flex items-center border border-b-gray-100 p-2">
            <img className="h-6" src="https://static.vecteezy.com/system/resources/previews/005/545/335/non_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                alt="user" />
            <span className="font-bold px-2">{name}</span>
            <span>{message}🚀</span>
        </div>
    )
}
