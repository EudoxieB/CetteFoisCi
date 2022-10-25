/**
 * DATABASE MODEL INIT.
 */
CREATE TABLE IF NOT EXISTS patient (
    id SERIAL PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    birth_date TIMESTAMP,
    next_appointment TIMESTAMP,
    created_at TIMESTAMP NOT NULL   -- To be set when an user is being created
);
CREATE TABLE IF NOT EXISTS cabinet (
    id SERIAL PRIMARY KEY,
    cname VARCHAR(50) NOT NULL,
    streetname VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    zip_code VARCHAR(5) NOT NULL,
    country VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS patient_cabinet (
    cabinet_id INTEGER,
    patient_id INTEGER,
    PRIMARY KEY(cabinet_id, patient_id),
    CONSTRAINT fk_cabinet FOREIGN KEY(cabinet_id) REFERENCES cabinet(id) ON DELETE CASCADE,
    CONSTRAINT fk_patient FOREIGN KEY(patient_id) REFERENCES patient(id) ON DELETE CASCADE 
    );

CREATE TABLE IF NOT EXISTS  practicien (
    cabinet_id INTEGER,
    id SERIAL PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT fk_cabinet FOREIGN KEY(cabinet_id) REFERENCES cabinet(id) ON DELETE CASCADE
);


ALTER TABLE patient
ADD practicien_id INTEGER;

--add practicien id as foreign key to the patient table
ALTER TABLE patient
ADD CONSTRAINT fk_practicien 
FOREIGN KEY (practicien_id)
REFERENCES practicien(id)
ON DELETE CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR (50) NOT NULL,
    password VARCHAR (255) NOT NULL
);
