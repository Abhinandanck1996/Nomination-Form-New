
import './update.css';
import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateReview = ({ _id }) => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState('');
  const [error, setError] = useState(null);
  const [myTeam, setMyTeam] = useState(false);
  const [data, setData] = useState();

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const navigate = useNavigate();

 

  const addAdditionalValue = ({_id}) => {
    if (!_id) {
      console.error("ID is not defined");
      return;
    }
    navigate('/review');
    const updatedData = {
      rating: count,
      comments: comments,
      myteam: myTeam
    };
   
  
    console.log("Updating data with ID:", _id);
    console.log("Updated data:", updatedData);
  
    axios
      .patch(`http://localhost:8000/review/${_id}`, updatedData)
      .then(() => {
       
        console.log("Additional value added successfully");

      })
      .catch((err) => {
        setError(err);
        console.error('Error adding additional value:', err);
      });
  };

 


  useEffect(() => {
    fetch(`http://localhost:8000/review/${_id}`) // Fetch specific review data
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setCount(data.rating);
            setComments(data.comments);
            setMyTeam(data.myteam);
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, [_id]);

  return (
    <section className="authBlock2" id="authBlock2">
      <article>
        <div className="nominee-details">
          <div className="main-nominee-text">
            <h1>Nominator Details</h1>
          </div>
        </div>
      </article>
      <article className="second-article">
        <div className="main-div-input">
          <div className="main-content">
            <h1>Review Details</h1>
          </div>
          <div className="counter-value">
            <p>
              Rating: <span>{count}</span>
              <button onClick={increment} className="plus">
                <FaPlus />
              </button>
              <button onClick={decrement} className="minus">
                <FaMinus />
              </button>
              <span className="myteam">
                {' '}
                <input
                  type="checkbox"
                  id="myteam"
                  name="myteam"
                  checked={myTeam}
                  onChange={(e) => setMyTeam(e.target.checked)}
                />
                <label htmlFor="myteam">Myteam</label>
              </span>
            </p>
          </div>
          <div className="comment-value">
            <p>
              <label htmlFor="comments">Comments: </label>
              <br />
              <textarea
                id="comments"
                name="comments"
                rows="4"
                cols="50"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </p>
          </div>
        </div>
      </article>
      <div className="form-group form-group-btn">
        <button onClick={addAdditionalValue}>Update</button>
      </div>
    </section>
  );
};

export default UpdateReview;
