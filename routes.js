const handleRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  const resdata = [];

  if (url === "/") {
    res.write("<h1>Hello!, welcome to the server</h1>");
    res.write("<form action='create-user' method='POST' >");
    res.write("<input type='text' name='username' /> ");
    res.write("<button>Send</button> ");
    res.write("</form>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("</body>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    // to take out data
    req.on("data", (chunk) => {
      resdata.push(chunk);
    });

    // to parse data into string format
    req.on("end", () => {
      const userdata = Buffer.concat(resdata).toString().split("=")[1];
      res.write("<body>");
      res.write("<h1>");
      res.write("Hello!, Welcome ")
      res.write(userdata);
      res.write(" onboard.")
      res.write("</h1>");
      res.write("</body>");
      return res.end();
    });
  }
};

module.exports = handleRoutes;
