import userPhoto from '../../Assets/user.png'
import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}')
      .then((response) => {
        this.props.setUsers(response.data.items)
      });
  }

  render() {
    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++ ) {
      pages.push(i);
    }


    return (
      <div>
        <h2 className={s.title}>Users</h2>
        <div className={s.pagination}>
          {pages.map( p => {
            return <span className={this.props.currentPage === p && s.selectedPage } onclick={() => {this.props.setCurrentPage(p)}}>{p}</span>
          })}

        </div>
        {
          this.props.users.map((u) => (
            <div key={u.id}>
              <div className={s.wrap}>
                <div className={s.wrapUser}>
                  <div>
                    {
                      <img
                        className={s.avatar}
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt=""
                      />
                    }
                  </div>
                  <div className={s.wrapButton}>
                    {u.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id)
                        }}
                      >
                        Follow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id)
                        }}
                      >
                        Unfollow
                      </button>
                    )}
                  </div>
                </div>
                <div className={s.wrapDescription}>
                  <div className={s.alignment}>
                    <div className={s.fullName}>{u.name}</div>
                    <div className={s.statusUser}>{u.status}</div>
                  </div>
                  <div className={s.alignment}>
                    <div className={s.country}>{'u.location.country'}</div>
                    <div className={s.city}>{'u.location.city'}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default Users;