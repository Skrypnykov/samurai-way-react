import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, onPageChanged, pageSize, totalUsersCount, users, ...props }) => {
  return <div>
    {users.map((u) => <User user={u} key={u.id}
      followingInProgress={props.followingInProgress}
      unfollow={props.unfollow}
      follow={props.follow}
    />)
    }
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
  </div>
};

export default Users;