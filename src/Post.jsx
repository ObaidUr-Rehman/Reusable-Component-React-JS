import React from 'react';

const Post = (props) => {
  return (
      <>
      <div className='main'>

      <div className='about-post'>
            <div className='pro-img'>
                <img src={props.image1} alt="profile Iamge" />
            </div>

            <div className='info'> 
                <p className='name'>{props.name}</p>
                <p className='time'>9h🌐</p>
             </div>         
        </div>

        <div className='para'>
            <p><b>{props.caption}</b></p>
        </div>


        <div className='postimg'>
            <img src={props.image} alt="" />
        </div>

        <div className='reaction'>
            <h3>❤😢👍 <strong>45</strong> </h3>
            <div className='comment'>
            <h5>170 Comment .</h5>
            <h5> 16 Share</h5>
            </div>
        </div>
<hr />
        <div className='my-btn'>
            <button> 👍Like</button>
            <button> 💬Comment</button>
            <button> ↪ Share</button>
        </div>

      </div>
      </>
  )
}
export default Post;
