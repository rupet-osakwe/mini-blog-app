import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

function CreatePost() {
    const [value, setValue] = useState('')
    return (
        <div className='create-post'>

            <div className="content">
                <input placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill className='quill-editor' theme='snow' value={value} onChange={setValue} />
                </div>
            </div>

            <div className="menu">
                <div className="item">Item1
                    <h3>publish</h3>
                    <span>
                        <b>Status:</b> Draft
                    </span>
                    <span><b>Visibility:</b>Public
                    </span>
                    <input type='file' id='file' style={{ display: 'none' }} />
                    <label htmlFor='file' >Upload</label>
                    <div className="buttons">
                        <button>save as a draft</button>
                        <button>update</button>
                    </div>
                </div>

                <div className="item">Item2
                    <h3>Category</h3>

                    <label htmlFor="art"> <input type="radio" name="category" value="art" id="art" />Art</label>


                    <label htmlFor="design"> <input type="radio" name="category" value="design" id="design" />Design</label>


                    <label htmlFor="science"><input type="radio" name="category" value="science" id="science" />Science</label>


                    <label htmlFor="cinema"><input type="radio" name="category" value="cinema" id="cinema" />Cinema</label>


                    <label htmlFor="food"><input type="radio" name="category" value="food" id="food" />Food</label>
                </div>
            </div>

        </div>
    )
}

export default CreatePost 