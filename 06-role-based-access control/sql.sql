-- CREATE ROLE role_name;

-- GRANT follows two formats:
--      GRANT PERMISSION ON table TO role;          -- GRANT INSERT, UPDATE, DELETE ON table1 TO some_user;
--      GRANT role TO other_role;


-- Set up Postgres roles
    /*
1. The first thing we need to do is manage the roles and permissions. Create the following four permission roles:

    p_students_read: permission to read the students table
    p_teachers_read: permission to read the teachers table
    p_students_write: permission to write to the students table
    p_teachers_write: permission to write to the teachers table
    */
    
CREATE ROLE p_students_read;
CREATE ROLE p_teachers_read;
CREATE ROLE p_students_write;
CREATE ROLE p_teachers_write;

    /*
2. Give the roles, p_students_read and p_teachers_read, permission to SELECT items in the students and teachers tables, respectively.
    */
GRANT SELECT ON students TO p_students_read;
GRANT SELECT ON teachers TO p_teachers_read;

    /*
3. Give the roles, p_students_write and p_teachers_write, permission to SELECT, INSERT, UPDATE, and DELETE items in the students and teachers tables, respectively.
    */
GRANT SELECT, INSERT, UPDATE, DELETE ON students TO p_students_write;
GRANT SELECT, INSERT, UPDATE, and DELETE ON teachers TO p_teachers_write;

    /*
4. Create two group roles

    g_school: group for the school employees
    g_district: group for the district employees
    */

GRANT SELECT, INSERT, UPDATE, DELETE ON students TO p_students_write;
GRANT SELECT, INSERT, UPDATE, and DELETE ON teachers TO p_teachers_write;

    /*
5. Grant the permission roles, p_students_read and p_teachers_read, to the group g_school.
    */

GRANT p_students_read TO g_school;
GRANT p_teachers_read TO g_school;

    /*
6. Grant the permission roles, p_students_write and p_teachers_write, to the group g_district.
    */
GRANT p_students_write TO g_district;
GRANT p_teachers_write TO g_district;

    /*
7. Create three user account roles that can log in: u_principal_skinner, u_teacher_hodge, and u_it_sonia.
    */
CREATE ROLE u_principal_skinner WITH LOGIN;
CREATE ROLE u_teacher_hodge WITH LOGIN;
CREATE ROLE u_it_sonia WITH LOGIN;

    /*
8. Add the user role u_principal_skinner to the group g_district and the user roles, u_teacher_hodge and u_it_sonia, to the group g_school.
    */
GRANT g_district TO u_principal_skinner;
GRANT g_school TO u_teacher_hodge;
GRANT g_school TO u_it_sonia;

    /*
9. Lastly, add default-deny permissions. Remove all public permissions for the tables, students and teachers.
    */
-- Remove public permissions
REVOKE ALL ON students FROM PUBLIC;
REVOKE ALL ON teachers FROM PUBLIC;


