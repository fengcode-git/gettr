CREATE TABLE [person](
  [id] VARCHAR(36) PRIMARY KEY, 
  [account_name] NVARCHAR(100) NOT NULL, 
  [nickname] NVARCHAR(100) NOT NULL, 
  [password] VARCHAR(100) NOT NULL, 
  [avatar] VARCHAR(100) NOT NULL, 
  [create_time] DATETIME NOT NULL, 
  [role] SMALLINT NOT NULL);