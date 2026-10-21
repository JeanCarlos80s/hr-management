<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\LeaveBalance;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<LeaveBalance>
 */
class LeaveBalanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstName = fake()->firstName();
        $lastName = fake()->lastName();

        return [
            'user_id' => null,
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'department_id' => Department::factory(),
            'position_id' => Position::factory(),
            'manager_id' => null,
            'hire_date' => fake()->dateTimeBetween('-5 years', 'now')->format('Y-m-d'),
            'employment_status' => 'active',
            'salary' => fake()->numberBetween(35000, 140000),
            'avatar_path' => null,
            'address' => fake()->address(),
        ];
    }
}
