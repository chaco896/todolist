import React from 'react';
import { Button, Form } from 'react-bootstrap';

const task = [
    {
        taskName: "Task 1"
    },

    {
        taskName: "Task 2"
    },
    {
        taskName: "Task 3"
    },
    {
        taskName: "Task 4"
    },
    {
        taskName: "Task 5"
    },
]
function Task({ data }) {
    return (
        <>
            <div className=" d-flex my-2 gap-2">
                <Form.Control type="text" defaultValue={data.taskName} />
                <Button className="bg-white text-info border-0">Edit</Button>
                <Button className="bg-white text-info border-0">Delet</Button>
            </div>
        </>
    );
}

function Tasklist() {
    return (
        <>
            <div className='bg-white p-4 mt-5'>
                <Form className='bg-info p-4'>
                    {
                        task.map((item, index) => {
                            return (
                                <Task data={item} key={index} />
                            )
                        })
                    }
                </Form>
            </div>
        </>
    );
}
export default Tasklist;
