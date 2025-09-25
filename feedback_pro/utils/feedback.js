// utils/feedback.js

export function calculateFeedbackStats(feedbacks) {
    const feedbackCount = feedbacks.length;

    if (feedbackCount === 0) {
        return {
            feedbackCount: 0,
            averageRating: 0,
            highestRating: 0,
            lowestRating: 0,
        };
    }

    const totalRating = feedbacks.reduce((sum, f) => sum + f.rating, 0);
    const averageRating = totalRating / feedbackCount;
    const ratings = feedbacks.map(f => f.rating);
    const highestRating = Math.max(...ratings);
    const lowestRating = Math.min(...ratings);

    return { feedbackCount, averageRating, highestRating, lowestRating };
}
