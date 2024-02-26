

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['f_name'];
    $lname = $_POST['l_name'];
    $email = $_POST['email'];
    $title = $_POST['title'];
    $company = $_POST['company'];
    $country = $_POST['country'];
    $work = $_POST['workphone'];
    $fax = $_POST['fax'];
    $home = $_POST['homephone'];
    $comment = $_POST['comment'];

    // Set up email
    $to = "bd@illexcor.com"; // Change this to your email address
    $subject = "New Message from your website Contact Form!";
    $body = "Name: $fname $lname\nEmail: $email\nTitle: $title\nCompany: $company\nCountry: $country\nWork Phone: $work\nFAX: $fax\nHome Phone: $home\n\nMessage:\n$comment";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Handle the case where the form wasn't submitted properly
    echo "Please submit the form.";
}
?>