import React from "react";
import Image from "react-bootstrap/Image";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Image
            src="https://www.ishtari.com/images/logo/logo-redd.png"
            width={120}
            height={30}
            className="body"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-2">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAe1BMVEXtHCT///8AplHtFyDvNTz96+wApU4ApEsAokYAoUMAnz0Aqlf7/v1/zJ/w+vW65M3P7NwysmpkwYtAt3UAmzHd8+jj9ezI6deX1bGFz6XvPEPv5eGaxKFcwIcjsGW138Vwx5Wk2rpOunyu4cbg4NaRvJXL1sUZnEnmQkVMuzo6AAADVUlEQVRoge2Y25abOBBFLU26ShcECBkQyVgGkWTy/18YCbdpJxNuDr1WP3D8YPAS2+XSUZWs0+nQoUOHDh069PH0zzvq9GmLPm8a/en0skFf/t0y+uXlRDZI0WrLcLIFbhkW7wVvBKVMvQs8vTAahO6aJ3vDkxboIGDUqZWp3xA50lcBym5XeO5HdsRzX+4GTwvqYlqAItB4IX23G/wiVMkpMgPKowlfotM1j61MS84YwwshulMFMcCE6PeCl8qFOfTeGgCQIfIsb6VezvoaeCoZyDwxiIMdQ9ZtQtJqOTMr4GnBKDhrMHgcYFhKbEXYa+BJrwMPkYWA3dXrjKEEQMh2gOeao5S8qU2A60y3pbBVFp1u/xpuz0JgSXSdBnhMC3LWhUkIN9wvJn0BflV10irScYRxeca0QLhFumTHFRNaCy2B/iLQPixWzvX1b+HNPWp4Ky9lQvGSKe9mU7MMv97QzqG3jN5uoGgAizIh86V9CV6pW9zY9twUOpO36DG8IZdFN+v3eXjlBcNQVqJTghXZhVj7VtYZF+J8eRaeh8VCC9v17p517+6XFMy177NsrinNwWuJ4GScsrELDR58deSlzucim4eXKHyZ+DZv9GMXes1ItCL6+WY6A0+6LJhBcYbwO9v0lQ7GRHSzwS+5pZejO4ZqO0iWJDHUlia06vppeG34jV2oECfcZxNMG2oZIS1Hht2TcCVu7ZiiIsZZYYl+pSOA7gpZ5xbO/hl4asKC5C7WFXC5h5prKx8Sj7yNo7rp0KfhlUbkJkuqmAu4vdhvE9vMV90peFK74LRol1yOE3l3eGxLg5iebUhT8AxME21WNTL0ZS0fnI62tC5UhVgXkPkZM06mJf7g5FoEgmzztHzbzYEOPyfNmsZa23jKUU2WxumcJ12BgnPZDXmtxn6Bl0dY1XI+WdSn4fX5zJwa14gf4e2v43In5ETsc8v/8ZFUT8EJ6aYSs3YL3Y8uRL/3P4u3wCnIVTvcDfAWo9hgGd7tC28YM1nWBv8Moa/aKK6FKyGa4SIJ5SZ0TrnbH66ywbO/OzItzl3ZN6u2ocvwtG37/HEGm5iTkv7Pj3+EL5wNfP32x4+///dlzcHCc6cgn3+sOhJ518OcQ4cOHTp06NDH009YV0Mm3Nqv9gAAAABJRU5ErkJggg=="
              width={20}
              height={17}
              className="logo"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
