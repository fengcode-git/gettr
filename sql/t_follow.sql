CREATE TABLE [follow](
  [id] VARCHAR(36) PRIMARY KEY, 
  [person_id] VARCHAR(36), 
  [follower_id] VARCHAR(36), 
  [create_time] DATETIME);