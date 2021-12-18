# Task Rocket

Task Rocket is a Full-Stack Web Application. This is the repository for the frontend task-rocket-app. The backend repo can be found [here](https://github.com/anikajb92/task_rocket_api)

## Table of Contents

* [General Info](#general-info)
* [Preview](#preview)
* [Technologies](#technologies)
* [Launch](#launch)
* [Features](#features)
* [Code Examples](#code-examples)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)


### General Info

Task Rocket is a task management app that prioritizes tasks and calculates user and productivity data.

### Preview

![welcomepage](https://media.giphy.com/media/ElZWHWwfVrsixJY4B5/giphy.gif)

![signup](https://media.giphy.com/media/JoIDpiFgrI2Tag20gO/giphy.gif)

![addtask](https://media.giphy.com/media/CI8st1XhKkLCD7Dlx6/giphy.gif)

### Technologies

* React.js 
* CSS

## Node Packages
* React Icons
* Google Charts
* Lottie Files

### Launch
 * To be able to utilize this full-stack app, open and run the [backend repo](https://github.com/anikajb92/task_rocket_api) first
 * Install dependencies `npm install`
 * Run scripts `npm start`
 * Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Features
* Fully authenticated login built with JWT and Bcrypt
* Ability to add, edit, and complete tasks *(full CRUD, RESTful API)*
* Filter through tasks based on priority or category *(state management using hooks, instant re-renders)*
* Personalized data and productivity analytics *(independent active record class methods)*
* Parallax scroll on Home Page 

### Code Examples

Frontend
```javascript
  const handleEditTask = event => {
    event.preventDefault();
    
    fetch(`http://localhost:3000/tasks/${selectedToEdit.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(
        {task: 
          { description: selectedToEdit.description, 
            category: selectedToEdit.category,
            priority: selectedToEdit.priority,
            completed: selectedToEdit.completed
          }
        })
      })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          alert(result.error)
        } else {
          setPendingTasks([...pendingTasks, result]);
          setPercentComplete(result.data);
          setSubmitted(true);
          setOpenEditTask(false);
      }
    })
  }
```
```javascript
 <div className={`task ${priorityColor(props.task.priority)}`}> 
      <div className="task-left">
        {props.task.completed?
          <button className="check"><BsCheckCircle /> </button> :
          <button className="check" onClick={()=> props.handleMarkComplete(props.task)}><BsCircle /> </button>
        }
       <p className="categoryTaskIcon"> {categoryIcon(props.task.category)} </p>
       <p> {props.task.description} </p>
      </div>
      <div className="task-right">
        <button className="edit" onClick={() => props.taskToEdit(props.task)}> <FiEdit /></button>
        <button className="edit" onClick={() => props.handleDeleteTask(props.task)}><IoTrashBinOutline /></button>
      </div>
    </div>
```
Backend
```ruby
def authenticate
    auth_header = request.headers[:Authorization]
    if !auth_header
      render json: {error: 'Auth bearer token header is required'}, status: :forbidden
    else 
      token = auth_header.split(' ')[1]
      secret = '*#*#*' #enter protected secret here
      begin
        decoded_token = JWT.decode token, secret
        payload = decoded_token.first
        @user = User.find payload['user_id'] #instance variable that can be carried across methods
      rescue 
        render json: {error: 'Unrecognized auth bearer token'}, status: :forbidden
      end
    end 
  end
```

### Inspiration

I am a highly organized to-do list lover. This was an app that I fully customized to my needs and aesthetic likings. Building a project like this helps me understand a customer's needs because I am both the user and developer. There were many trials I went through to create the app that Task Rocket is today, but there is always room to grow. If you have suggestions or are interested in pair-programming, please don't hesitate to reach out to me. I welcome all new ideas!

### Contact

 My name is Anika Bernstein. Drop me a line anytime!
 📫 Email me at anikabernsteindev@gmail.com 
 💬 Connect with me on [LinkedIn](https://www.linkedin.com/in/anika-bernstein/)

## License
[Click to View](https://www.gnu.org/licenses/gpl-3.0.en.html)