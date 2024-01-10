### Data Security:

# Securing School Data

Off-platform project, part of Chapter "Data Security" from Codecademy's Full-Stack Development path

## Tools/technologies demonstrated

- TLS
- Role Based Access Control (RBAC)
- Authentication and Authorization in Postgres
- Environment Variables

## Brief

A local elementary school’s database was recently hacked. While the administration believes sensitive information of the students was not the target of this breach, they do not want similar incidents to occur in the future. You and a group of other cybersecurity engineers decide to volunteer your time to secure the school’s Postgres database.

Volunteers were shocked to find that the current configuration of Postgres allowed anyone to connect to the school’s database! The group tasked you to update the broken authentication and access control.

Volunteers also discovered that the school wrote some scripts to generate demographic data. The school shares these scripts with the rest of the schools in the district through a public repository. These scripts, however, contain sensitive data such as API keys for both its local and district database servers. You need to make sure that sensitive information is no longer exposed to the public.

## Actions (implemented in this sequence)

***(See relevant files for sub-tasks)***

- Set up Postgres roles, implement RBAC:  
[sql.sql](./sql.sql).  

- Configure Postgres Settings:
[postgresql.conf](./postgresql.conf)  
[pg_hba.conf](./pg_hba.conf)

- Utilize environment variables:  
[sample.env](./sample.env)  
[no_dot.env](./no_dot.env)  
[demographics.js](./demographics.js)

- Create .gitignore  
[.gitignore](./.gitignore)

***(Obviously under normal circumstances no_dot.env will have a different name and .gitignore will not contain comments only)***  
