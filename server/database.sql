CREATE DATABASE sublytest;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    country_of_origin VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE files( 
    file_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    duration INT,
    size INT,
    uuid INT,
    created_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_user_id
      FOREIGN KEY(uuid) 
	    REFERENCES users(user_id)
);