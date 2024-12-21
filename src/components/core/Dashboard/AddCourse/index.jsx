import RenderSteps from "./RenderSteps";


export default function AddCourse() {
    return (
        <div>
            <div className="w-full relative z-[1] text-richblack-5 flex justify-between ">
                <div className="w-[58%]">
                    <h1 className='text-3xl font-medium mb-12 '>Add Course</h1>
                    <div>
                        <RenderSteps />
                    </div>
                </div>
                <div className=" sticky top-10 flex flex-col items-start justify-center w-[40%] h-[382px] bg-richblack-800 p-6 rounded-md
                 border-[1px] border-richblack-700">
                    <p className="text-lg font-medium mb-8">⚡ Course Upload Tips</p>
                    <ul className="flex flex-col gap-4 text-xs list-disc pl-6">
                        <li>Set the Course Price option or make it free.</li>
                        <li>Standard size for the course thumbnail is 1024x576.</li>
                        <li>Video section controls the course overview video.</li>
                        <li>Course Builder is where you create & organize a course.</li>
                        <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                        <li>Information from the Additional Data section shows up on the course single page.</li>
                        <li>Make Announcements to notify any important</li>
                        <li>Notes to all enrolled students at once.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}