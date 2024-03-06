export function Admin() {
  return (
    <div>
      <h1>Welcome Admin to Admin Home Page </h1>
      <form action="addsong" method="Post">
        <input type="submit" value="ADD SONGS" id="addsong" />
      </form>

      <a href="addsong">AddSong</a>

      <br />
      <br />
      <form action="viewsongs" method="post">
        <input type="submit" value="ViewSongs" id="viewsong" />
      </form>

      <br />
      <br />

      <form action="createplaylists" method="post">
        <input type="submit" value="CREATE PLAYLIST" id="createplaylist" />
      </form>
      <br></br>

      <form action="viewplaylists" method="post">
        <input type="submit" value="VIEW PLAYLIST" id="viewplaylist" />
        <br></br>
      </form>

      <form action="logout">
        <input type="submit" value="LOGOUT" id="btns" />
      </form>
    </div>
  );
}
