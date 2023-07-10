-- Insert departments
INSERT INTO department (name) VALUES
  ('Players'),
  ('Coaching'),
  ('Management'),
  ('Medical');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
  ('QB', 500, 1),
  ('WR', 150, 1),
  ('RB', 100, 1),
  ('Head Coach', 290, 2),
  ('QB Coach', 750, 2),
  ('Owner', 1400, 3),
  ('Doctor', 250, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Johnny', 'Truth', 1, NULL),
  ('Chad', 'Harrison', 1, NULL),
  ('Emmitt', 'Peterson', 1, NULL),
  ('Bill', 'LeCheck', 2, NULL),
  ('Kellen', 'Smores', 2, NULL),
  ('Bill', 'Gates', 3, NULL),
  ('Eddie', 'Johnstone', 4, NULL);
