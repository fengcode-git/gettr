CREATE VIEW post_view
AS
SELECT post.id,
       post.ref_id,
       post.person_id,
       post.status,
       post.like_num,
       post.forward_num,
       post.content,
       post.type,
       post.create_time,
       post.images,
       post.open_graph,
       post.video,
       person.account_name,
       person.nickname,
       person.avatar,
       ref_post.person_id   AS ref_person_id,
       ref_post.status      AS ref_status,
       ref_post.like_num    AS ref_like_num,
       ref_post.forward_num AS ref_forward_num,
       ref_post.content     AS ref_content,
       ref_post.type        AS ref_type,
       ref_post.create_time AS ref_create_time,
       ref_post.images      AS ref_images,
       ref_post.open_graph  AS ref_open_graph,
       ref_post.video       AS ref_video
FROM post
         left JOIN person on person.id = post.person_id
         LEFT OUTER JOIN post as ref_post ON (post.ref_id = ref_post.id)
         left join person as ref_person on ref_post.person_id = ref_person.id
order by post.create_time desc, ref_create_time desc;