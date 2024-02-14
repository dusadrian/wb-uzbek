-- Create user table
CREATE SEQUENCE id_users_sequence START 1;

-- Creates new user defined type 'mood' as an Enum
CREATE TYPE userTypeEnum AS ENUM (
    'collector',
    'coordinator',
    'evaluator',
    'main',
    'admin'
);

CREATE TABLE uzbek.main.users (
    id INT DEFAULT nextval('id_users_sequence'),
    uuid UUID DEFAULT uuid(),
    userType userTypeEnum,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO
    uzbek.main.users (userType, username, password)
VALUES
    ('admin', 'admin', 'admin'),
    ('main', 'main', 'main'),
    ('evaluator', 'evaluator', 'evaluator'),
    ('coordinator', 'coordinator', 'coordinator'),
    ('collector', 'collector', 'collector');
