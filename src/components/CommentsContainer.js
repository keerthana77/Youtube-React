const commentsData = [
    {
        name: 'Keerthana Kalidass',
        text: 'Loreum Ipsum ...',
        replies: [
            {
                name: 'Keerthana Kalidass',
                text: 'Lorem ...',
                replies: [
                    {
                        name: 'Keerthana Kalidass',
                        text: 'Lorem....',
                        replies: [
                            {
                                name: 'Keerthana',
                                text: 'Loreum ...',
                                replies: []
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Keerthana Kalidass',
                text: 'Lorem ...',
                replies: [
                ]
            }
        ]
    },
    {
        name: 'Keerthana Kalidass',
        text: 'Loreum Ipsum ...',
        replies: [
            {
                name: 'Keerthana Kalidass',
                text: 'Lorem ...',
                replies: []
            },
            {
                name: 'Keerthana Kalidass',
                text: 'Lorem ...',
                replies: []
            }
        ]
    },
    {
        name: 'Keerthana Kalidass',
        text: 'Loreum Ipsum ...',
        replies: []
    },
];

function Comment({ data }) {
    const { name, text } = data;
    return (
        <div className="flex bg-gray-100 rounded-lg p-2 items-center mb-2">
            <img className="w-8 h-8" src="https://static.vecteezy.com/system/resources/previews/005/545/335/non_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                alt="user" />
            <div className="pl-2">
                <p className="font-bold">{name} </p>
                <p>{text} </p>
            </div>
        </div >
    )
}

function CommentsList({ comments }) {
    //Dont use index as key
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment} />
            <div className="ml-5 pl-5 border border-l-black">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}

export default function CommentsContainer() {
    return (
        <div className='p-2'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}
