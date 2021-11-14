CREATE VIEW [post_view]
AS
SELECT DISTINCT 
                [post].[id], 
                [post].[ref_id], 
                [post].[person_id], 
                [post].[status], 
                [post].[like_num], 
                [post].[forward_num], 
                [post].[content], 
                [post].[type], 
                [post].[create_time], 
                [post].[images], 
                [person].[account_name], 
                [person].[nickname], 
                [person].[avatar], 
                [ref_post].[person_id] AS [ref_person_id], 
                [ref_post].[status] AS [ref_status], 
                [ref_post].[like_num] AS [ref_like_num], 
                [ref_post].[forward_num] AS [ref_forward_num], 
                [ref_post].[content] AS [ref_content], 
                [ref_post].[type] AS [ref_type], 
                [ref_post].[create_time] AS [ref_create_time], 
                [ref_post].[images] AS [ref_images], 
                [ref_person].[nickname] AS [ref_nickname], 
                [ref_person].[avatar] AS [ref_avatar], 
                [ref_person].[account_name] AS [ref_account_name]
FROM   [post]
       LEFT OUTER JOIN [post] [ref_post] ON ([post].[ref_id] = [ref_post].[id])
       LEFT OUTER JOIN [person] ON ([ref_post].[person_id] = [person].[id])
       LEFT OUTER JOIN [person] [ref_person] ON ([ref_post].[person_id] = [ref_person].[id]);